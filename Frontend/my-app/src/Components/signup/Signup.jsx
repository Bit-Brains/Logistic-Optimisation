import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = ({ toggleAuthMode, handleToken }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        if (password === confirmPassword) {
          setPhone(Number(phone));
          const signupData = { firstName, lastName, email, phone: Number(phone), password, latitude, longitude }
          console.log(signupData);
          try {
            if (userType === 'customer') {
              const response = await axios.post("http://localhost:3001/auth/registerCustomer", signupData);
              console.log(response);
              handleToken(response.data.token);
              navigate("/items");
            } else {
              const response = await axios.post('http://localhost:3001/auth/registerSupplier', signupData);
              console.log(response.data);
              // localStorage.setItem("token", response.data.token);
            }
          } catch (err) {
            console.log(err);
            setErr("Can't Signup Please Try Again Later");
          }
        } else {
          console.error('Passwords do not match');
        }
      });
    } else {
      setErr("Geo Location isn't supported by this browser")
    }
    // Handle signup logic here

  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="userType">Who are you?</label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="customer">Customer</option>
            <option value="supplier">Supplier</option>
          </select>
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <p>
          Already have an account? <span onClick={toggleAuthMode} className="toggle-link">Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
