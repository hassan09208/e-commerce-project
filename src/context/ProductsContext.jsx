import { createContext, useContext, useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, push, update, remove, set } from 'firebase/database';
import { products as initialProducts, categories } from '../data/products';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = ref(database, 'products');

    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
          
        }));
        setProducts(productsArray);
      } else {
        seedInitialProducts();
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const seedInitialProducts = () => {
    const productsRef = ref(database, 'products');
    initialProducts.forEach((product) => {
      const newRef = push(productsRef);
      set(newRef, product);
    });
  };

  const addProduct = (product) => {
    const productsRef = ref(database, 'products');
    const newRef = push(productsRef);
    set(newRef, product);
  };

  const updateProduct = (id, updatedData) => {
    const productRef = ref(database, `products/${id}`);
    update(productRef, updatedData);
  };

  const deleteProduct = (id) => {
    const productRef = ref(database, `products/${id}`);
    remove(productRef);
  };

  return (
    <ProductsContext.Provider value={{ products, categories, loading, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};