import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('luxuryCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('luxuryCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant = null, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.variant === (variant?.name || 'Default')
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.variant === (variant?.name || 'Default')
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: variant?.price || product.price,
          variant: variant?.name || 'Default',
          color: variant?.color || '#1a1a1a',
          quantity,
          image: product.image
        }
      ];
    });
  };

  const removeFromCart = (itemId, variant) => {
    setCart(prevCart =>
      prevCart.filter(item => !(item.id === itemId && item.variant === variant))
    );
  };

  const updateQuantity = (itemId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, variant);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
