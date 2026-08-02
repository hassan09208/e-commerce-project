import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Check, ArrowLeft, Package, Award, Shield } from 'lucide-react';
import { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, setIsCartOpen } = useCart();
  const { products, loading } = useProducts();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const imageRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = imageRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-luxury-white text-xl">Loading...</p>
      </div>
    );
  }

  const product = products.find(p => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-luxury-white mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-luxury">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const currentVariant = product.variants[selectedVariant];
  const discount = Math.round(((product.originalPrice - currentVariant.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product, currentVariant, quantity);
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    addToCart(product, currentVariant, quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/shop" className="inline-flex items-center text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300">
            <ArrowLeft size={16} className="mr-2" />
            Back to Shop
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="card-luxury h-[500px] lg:h-[600px] overflow-hidden"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                ref={imageRef}
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
                }}
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mt-2">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'text-luxury-gold fill-luxury-gold' : 'text-luxury-gray'}
                  />
                ))}
              </div>
              <span className="text-luxury-silver/70">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-luxury-gold text-4xl font-bold">
                ${currentVariant.price.toLocaleString()}
              </span>
              {discount > 0 && (
                <>
                  <span className="text-luxury-silver/50 line-through text-2xl">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-luxury-gold text-luxury-black text-sm font-bold px-3 py-1 rounded-full">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-luxury-silver/80 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div>
                <h3 className="text-luxury-white font-semibold mb-3">Select Variant</h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(index)}
                      className={`relative px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                        selectedVariant === index
                          ? 'border-luxury-gold bg-luxury-gold/10'
                          : 'border-luxury-gray/30 hover:border-luxury-gray/60'
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-full mr-2 inline-block"
                        style={{ backgroundColor: variant.color }}
                      />
                      <span className="text-luxury-white text-sm">{variant.name}</span>
                      {selectedVariant === index && (
                        <Check size={16} className="absolute top-1 right-1 text-luxury-gold" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-luxury-white font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-lg border border-luxury-gray/30 text-luxury-white hover:border-luxury-gold transition-colors duration-300 flex items-center justify-center text-xl"
                >
                  -
                </button>
                <span className="text-luxury-white text-xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-12 h-12 rounded-lg border border-luxury-gray/30 text-luxury-white hover:border-luxury-gold transition-colors duration-300 flex items-center justify-center text-xl"
                >
                  +
                </button>
              </div>
              <p className="text-luxury-silver/50 text-sm mt-2">
                {product.stock} items in stock
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="btn-luxury flex-1 flex items-center justify-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="btn-luxury-outline flex-1"
              >
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-luxury-gray/30">
              <div className="text-center">
                <Package className="text-luxury-gold mx-auto mb-2" size={24} />
                <p className="text-luxury-silver/70 text-sm">Free Shipping</p>
              </div>
              <div className="text-center">
                <Award className="text-luxury-gold mx-auto mb-2" size={24} />
                <p className="text-luxury-silver/70 text-sm">Premium Quality</p>
              </div>
              <div className="text-center">
                <Shield className="text-luxury-gold mx-auto mb-2" size={24} />
                <p className="text-luxury-silver/70 text-sm">2 Year Warranty</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-luxury p-8 mb-16"
        >
          <h2 className="text-2xl font-serif font-bold text-gradient mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications || {}).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-luxury-gray/20">
                <span className="text-luxury-silver/70 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className="text-luxury-white font-medium">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-luxury p-8"
        >
          <h2 className="text-2xl font-serif font-bold text-gradient mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-luxury-gray/20 pb-6 last:border-0">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-luxury-gray/30 flex items-center justify-center text-luxury-silver">
                    JD
                  </div>
                  <div>
                    <p className="text-luxury-white font-medium">John Doe</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className={j < 5 ? 'text-luxury-gold fill-luxury-gold' : 'text-luxury-gray'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-luxury-silver/80">
                  Absolutely stunning quality! The attention to detail is remarkable. Worth every penny for such a premium product.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;