import { X, CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    onClose();
    setStep(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-luxury-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-12 lg:inset-20 bg-luxury-charcoal border Border-luxury-gray/30 rounded-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-luxury-gray/30">
              <h2 className="text-2xl font-serif font-bold text-gradient">Checkout</h2>
              <button
                onClick={onClose}
                className="p-2 text-luxury-silver hover:text-luxury-white transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="space-y-6">
                  <div className="card-luxury p-6">
                    <h3 className="text-luxury-white font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-4 max-h-64 overflow-y-auto scrollbar-hide">
                      {cart.map((item) => (
                        <div key={`${item.id}-${item.variant}`} className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded flex-shrink-0 object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-luxury-white font-medium text-sm truncate">{item.name}</p>
                            <p className="text-luxury-silver/70 text-xs">{item.variant} × {item.quantity}</p>
                          </div>
                          <p className="text-luxury-gold font-semibold">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card-luxury p-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-luxury-silver">Subtotal</span>
                      <span className="text-luxury-white">${cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-silver">Shipping</span>
                      <span className="text-luxury-gold">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-silver">Tax</span>
                      <span className="text-luxury-white">${(cartTotal * 0.08).toLocaleString()}</span>
                    </div>
                    <div className="border-t border-luxury-gray/30 pt-4 flex justify-between">
                      <span className="text-luxury-white font-semibold text-lg">Total</span>
                      <span className="text-luxury-gold font-bold text-2xl">
                        ${(cartTotal * 1.08).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 card-luxury">
                      <Truck className="text-luxury-gold mx-auto mb-2" size={24} />
                      <p className="text-luxury-silver/70 text-xs">Free Shipping</p>
                    </div>
                    <div className="text-center p-4 card-luxury">
                      <Shield className="text-luxury-gold mx-auto mb-2" size={24} />
                      <p className="text-luxury-silver/70 text-xs">Secure Payment</p>
                    </div>
                    <div className="text-center p-4 card-luxury">
                      <CreditCard className="text-luxury-gold mx-auto mb-2" size={24} />
                      <p className="text-luxury-silver/70 text-xs">Easy Returns</p>
                    </div>
                  </div>
                </div>

                {/* Checkout Form */}
                <div className="card-luxury p-6">
                  <h3 className="text-luxury-white font-semibold mb-6">Shipping & Payment</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-luxury-silver/70 text-sm mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          className="input-luxury w-full"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-luxury-silver/70 text-sm mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          className="input-luxury w-full"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-luxury-silver/70 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="input-luxury w-full"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-luxury-silver/70 text-sm mb-2">Address</label>
                      <input
                        type="text"
                        required
                        className="input-luxury w-full"
                        placeholder="123 Luxury Avenue"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-luxury-silver/70 text-sm mb-2">City</label>
                        <input
                          type="text"
                          required
                          className="input-luxury w-full"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-luxury-silver/70 text-sm mb-2">ZIP Code</label>
                        <input
                          type="text"
                          required
                          className="input-luxury w-full"
                          placeholder="10001"
                        />
                      </div>
                      <div>
                        <label className="block text-luxury-silver/70 text-sm mb-2">Country</label>
                        <input
                          type="text"
                          required
                          className="input-luxury w-full"
                          placeholder="USA"
                        />
                      </div>
                    </div>

                    <div className="border-t border-luxury-gray/30 pt-4 mt-6">
                      <h4 className="text-luxury-white font-semibold mb-4">Payment Details</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-luxury-silver/70 text-sm mb-2">Card Number</label>
                          <input
                            type="text"
                            required
                            className="input-luxury w-full"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-luxury-silver/70 text-sm mb-2">Expiry Date</label>
                            <input
                              type="text"
                              required
                              className="input-luxury w-full"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-luxury-silver/70 text-sm mb-2">CVV</label>
                            <input
                              type="text"
                              required
                              className="input-luxury w-full"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn-luxury w-full mt-6">
                      Place Order - ${(cartTotal * 1.08).toLocaleString()}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
