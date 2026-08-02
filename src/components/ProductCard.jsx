import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setIsCartOpen(true);
  };

  const price = product.variants?.[0]?.price ?? product.originalPrice;
  const discount = Math.round(((product.originalPrice - price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="card-luxury group"
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-luxury-dark">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Quick Actions */}
          <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <button
              onClick={handleAddToCart}
              className="p-3 bg-luxury-gold text-luxury-black rounded-full hover:bg-luxury-goldLight transition-colors duration-300 transform hover:scale-110"
            >
              <ShoppingCart size={18} />
            </button>
            <button className="p-3 bg-luxury-white text-luxury-black rounded-full hover:bg-luxury-platinum transition-colors duration-300 transform hover:scale-110">
              <Eye size={18} />
            </button>
          </div>

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-luxury-gold text-luxury-black text-xs font-bold px-3 py-1 rounded-full">
              -{discount}%
            </div>
          )}

          {/* Trending Badge */}
          {product.trending && (
            <div className="absolute top-4 right-4 bg-luxury-white/90 text-luxury-black text-xs font-bold px-3 py-1 rounded-full">
              Trending
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-3">
          <h3 className="text-luxury-white font-semibold text-lg leading-tight group-hover:text-luxury-gold transition-colors duration-300">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? 'text-luxury-gold fill-luxury-gold' : 'text-luxury-gray'}
                />
              ))}
            </div>
            <span className="text-luxury-silver/70 text-sm">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="text-luxury-gold font-bold text-xl">${price.toLocaleString()}</span>
                    {product.originalPrice > price && (
              <span className="text-luxury-silver/50 line-through text-sm">
                   ${product.originalPrice.toLocaleString()}
           </span>
)}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
