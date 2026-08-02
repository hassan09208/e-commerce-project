import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const success = await login(email, password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Galat email ya password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black">
      <form onSubmit={handleSubmit} className="bg-luxury-dark p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-luxury-white mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-luxury-charcoal text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-luxury-charcoal text-white"
          required
        />
        <button type="submit" className="btn-luxury w-full">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;