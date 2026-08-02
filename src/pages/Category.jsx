import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductsContext';
import { motion } from 'framer-motion';

const Category = () => {
  const { categoryId } = useParams();
  const { products, categories, loading } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-luxury-white text-xl">Loading...</p>
      </div>
    );
  }

  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-luxury-white mb-4">Category Not Found</h2>
          <Link to="/shop" className="btn-luxury">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Collection</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mt-4 mb-4">
            {category.name}
          </h1>
          <p className="text-luxury-silver/70 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
          <p className="text-luxury-silver/50 mt-2">
            {categoryProducts.length} Products
          </p>
        </motion.div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-luxury-silver/70 text-lg">No products found in this category.</p>
          </div>
        )}

        {/* Back to Shop */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-luxury-outline">
            View All Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;