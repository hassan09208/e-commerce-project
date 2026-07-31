import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { motion } from 'framer-motion';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (priceRange === 'low' && product.price > 1000) return false;
    if (priceRange === 'medium' && (product.price < 1000 || product.price > 5000)) return false;
    if (priceRange === 'high' && product.price < 5000) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
            Shop Collection
          </h1>
          <p className="text-luxury-silver/70">
            Discover our curated selection of premium products
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="card-luxury p-6 space-y-8 sticky top-24">
              {/* Categories */}
              <div>
                <h3 className="text-luxury-white font-semibold mb-4 tracking-wider">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                      selectedCategory === 'all'
                        ? 'bg-luxury-gold text-luxury-black'
                        : 'text-luxury-silver hover:bg-luxury-gray/30'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-luxury-gold text-luxury-black'
                          : 'text-luxury-silver hover:bg-luxury-gray/30'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-luxury-white font-semibold mb-4 tracking-wider">Price Range</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setPriceRange('all')}
                    className={`w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                      priceRange === 'all'
                        ? 'bg-luxury-gold text-luxury-black'
                        : 'text-luxury-silver hover:bg-luxury-gray/30'
                    }`}
                  >
                    All Prices
                  </button>
                  <button
                    onClick={() => setPriceRange('low')}
                    className={`w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                      priceRange === 'low'
                        ? 'bg-luxury-gold text-luxury-black'
                        : 'text-luxury-silver hover:bg-luxury-gray/30'
                    }`}
                  >
                    Under $1,000
                  </button>
                  <button
                    onClick={() => setPriceRange('medium')}
                    className={`w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                      priceRange === 'medium'
                        ? 'bg-luxury-gold text-luxury-black'
                        : 'text-luxury-silver hover:bg-luxury-gray/30'
                    }`}
                  >
                    $1,000 - $5,000
                  </button>
                  <button
                    onClick={() => setPriceRange('high')}
                    className={`w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                      priceRange === 'high'
                        ? 'bg-luxury-gold text-luxury-black'
                        : 'text-luxury-silver hover:bg-luxury-gray/30'
                    }`}
                  >
                    Over $5,000
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-luxury-silver/70">
                Showing {sortedProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-luxury py-2 px-4 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-luxury-silver/70 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
