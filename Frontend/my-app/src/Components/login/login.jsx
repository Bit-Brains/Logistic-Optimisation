import React, { useState } from 'react';
import './Login.css';

const Login = ({ toggleAuthMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isCustomer, setIsCustomer] = useState(false);
  const [isSupplier, setIsSupplier] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', { email, password, phone, isCustomer, isSupplier });
  };

  const handleCheckboxChange = (type) => {
    if (type === 'customer') {
      setIsCustomer(!isCustomer);
      if (isSupplier) setIsSupplier(false);
    } else if (type === 'supplier') {
      setIsSupplier(!isSupplier);
      if (isCustomer) setIsCustomer(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="checkbox-group">
          <label className={`checkbox-label ${isCustomer ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={isCustomer}
              onChange={() => handleCheckboxChange('customer')}
            />
            Customer
          </label>
          <label className={`checkbox-label ${isSupplier ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={isSupplier}
              onChange={() => handleCheckboxChange('supplier')}
            />
            Supplier
          </label>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn">Login</button>
        <p>
          Don't have an account? <span onClick={toggleAuthMode} className="toggle-link">Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
