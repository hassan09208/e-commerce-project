import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useState, useRef } from 'react';
import { products, categories } from '../data/products';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured);
  const trendingProducts = products.filter(p => p.trending);

  const watchImageRef = useRef(null);
  const [watchRotate, setWatchRotate] = useState({ x: 0, y: 0 });

  const handleWatchMouseMove = (e) => {
    const el = watchImageRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    setWatchRotate({ x: rotateX, y: rotateY });
  };

  const handleWatchMouseLeave = () => {
    setWatchRotate({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-dark to-luxury-charcoal" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-platinum/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="text-luxury-gold" size={24} />
              <span className="text-luxury-gold text-sm tracking-[0.3em] uppercase">Premium Collection 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
              <span className="text-gradient">Redefining</span>
              <br />
              <span className="text-gradient-gold">Luxury</span>
            </h1>
            
            <p className="text-luxury-silver/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover an exclusive collection of premium products crafted for those who appreciate the finest things in life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/shop" className="btn-luxury">
                Explore Collection
                <ArrowRight size={18} className="inline ml-2" />
              </Link>
              <Link to="/category/watches" className="btn-luxury-outline">
                View Categories
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-luxury-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-luxury-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 3D Product Showcase */}
      <section className="py-24 bg-luxury-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Featured Product</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mt-4 mb-6">
                Chronos Elite Watch
              </h2>
              <p className="text-luxury-silver/80 text-lg leading-relaxed mb-8">
                A masterpiece of Swiss engineering, featuring a 42mm titanium case with sapphire crystal and automatic movement. Experience timekeeping at its finest.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div>
                  <span className="text-luxury-gold text-3xl font-bold">$12,500</span>
                  <span className="text-luxury-silver/50 line-through ml-3">$15,000</span>
                </div>
              </div>
              <Link to="/product/1" className="btn-luxury">
                View Details
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px]"
            >
              <div 
                className="card-luxury h-full overflow-hidden"
                style={{ perspective: '1000px' }}
                onMouseMove={handleWatchMouseMove}
                onMouseLeave={handleWatchMouseLeave}
              >
                <img 
                  ref={watchImageRef}
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                  alt="Chronos Elite Watch"
                  className="w-full h-full object-cover transition-transform duration-200 ease-out"
                  style={{
                    transform: `rotateX(${watchRotate.x}deg) rotateY(${watchRotate.y}deg)`
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Browse By</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mt-4">
              Categories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/category/${category.id}`}
                  className="group card-luxury p-6 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-luxury-white font-semibold text-lg mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-luxury-silver/70 text-sm mb-3">{category.description}</p>
                  <span className="text-luxury-gold text-sm font-medium">
                    {category.productCount} Products
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-luxury-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Curated For You</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mt-4">
              Featured Products
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-luxury-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Popular Now</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mt-4">
              Trending
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;