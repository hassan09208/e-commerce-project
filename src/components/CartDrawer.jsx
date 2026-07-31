import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div>
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-luxury-black/80 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-luxury-charcoal border-l border-luxury-gray/30 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-luxury-gray/30">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="text-luxury-gold" size={24} />
                  <h2 className="text-xl font-serif font-bold text-luxury-white">Your Cart</h2>
                  <span className="bg-luxury-gold text-luxury-black text-xs font-bold px-2 py-1 rounded-full">
                    {cart.length}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-luxury-silver hover:text-luxury-white transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <ShoppingBag size={64} className="text-luxury-gray/50" />
                    <p className="text-luxury-silver/70">Your cart is empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="btn-luxury"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.variant}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start space-x-4 p-4 bg-luxury-dark/50 rounded-lg border border-luxury-gray/20"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg flex-shrink-0 object-cover"
                      />

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-luxury-white font-medium text-sm truncate">{item.name}</h3>
                        <p className="text-luxury-silver/70 text-xs mt-1">{item.variant}</p>
                        <p className="text-luxury-gold font-bold mt-2">${item.price.toLocaleString()}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end space-y-2">
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-luxury-silver/50 hover:text-red-500 transition-colors duration-300"
                        >
                          <Trash2 size={16} />
                        </button>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-6 h-6 rounded bg-luxury-gray/30 text-luxury-white hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-300 flex items-center justify-center"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-luxury-white font-medium w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-6 h-6 rounded bg-luxury-gray/30 text-luxury-white hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-300 flex items-center justify-center"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-luxury-gray/30 space-y-4 bg-luxury-dark/30">
                  <div className="flex items-center justify-between">
                    <span className="text-luxury-silver">Subtotal</span>
                    <span className="text-luxury-white font-bold text-xl">${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-luxury-silver/70">Shipping</span>
                    <span className="text-luxury-gold">FREE</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-luxury-gray/30">
                    <span className="text-luxury-white font-semibold">Total</span>
                    <span className="text-luxury-gold font-bold text-2xl">${cartTotal.toLocaleString()}</span>
                  </div>
                  <button onClick={handleCheckout} className="btn-luxury w-full">
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn-luxury-outline w-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </motion.div>
        </>
      )}
    </AnimatePresence>
    
    <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
};

export default CartDrawer;
