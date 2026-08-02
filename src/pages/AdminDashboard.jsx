import { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { products, addProduct, updateProduct, deleteProduct, loading } = useProducts();
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', price: '', image: '', category: '' });
  const [editId, setEditId] = useState(null);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name: form.name,
      category: form.category,
      image: form.image,
      originalPrice: Number(form.price),
      variants: [{ name: 'Default', color: '#000000', price: Number(form.price) }],
      rating: 4.5,
      reviews: 0,
      stock: 10,
      description: form.name,
      specifications: {},
      featured: false,
      trending: false,
    };

    if (editId) {
      updateProduct(editId, productData);
      setEditId(null);
    } else {
      addProduct(productData);
    }
    setForm({ name: '', price: '', image: '', category: '' });
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({
      name: product.name,
      price: product.originalPrice,
      image: product.image,
      category: product.category,
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading products...</div>;
  }

  return (
    <div className="min-h-screen bg-luxury-black p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-luxury-white">Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn-luxury-outline">Logout</button>
      </div>

      <form onSubmit={handleSubmit} className="bg-luxury-dark p-6 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="p-3 rounded bg-luxury-charcoal text-white" required />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="p-3 rounded bg-luxury-charcoal text-white" required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} className="p-3 rounded bg-luxury-charcoal text-white" required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="p-3 rounded bg-luxury-charcoal text-white" required />
        <button type="submit" className="btn-luxury md:col-span-4">
          {editId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-luxury-dark p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-3" />
            <h3 className="text-white font-semibold">{product.name}</h3>
            <p className="text-luxury-gold">${product.originalPrice}</p>
            <div className="flex gap-2 mt-3">
              <button onClick={() => handleEdit(product)} className="flex-1 bg-blue-600 text-white py-2 rounded">Edit</button>
              <button onClick={() => deleteProduct(product.id)} className="flex-1 bg-red-600 text-white py-2 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;