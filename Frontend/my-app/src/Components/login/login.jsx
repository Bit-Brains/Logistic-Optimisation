import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './Login.css';

const Login = ({ toggleAuthMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [phone, setPhone] = useState('');
  const [isCustomer, setIsCustomer] = useState(false);
  const [isSupplier, setIsSupplier] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here
    const loginData = { email, password };
    try {
      if (isCustomer) {
        const response = await axios.post('http://localhost:3001/auth/loginCustomer', loginData);
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/items");
      } else if (isSupplier) {
        const response = await axios.post('http://localhost:3001/auth/loginSupplier', loginData);
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
      }
    } catch (err) {
      console.error('Something went wrong', err);
      setError('Login Failed please try again');
    }
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
        {/* <div className="form-group"> */}
        {/*   <label>Phone Number</label> */}
        {/*   <input */}
        {/*     type="tel" */}
        {/*     value={phone} */}
        {/*     onChange={(e) => setPhone(e.target.value)} */}
        {/*     required */}
        {/*   /> */}
        {/* </div> */}
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
