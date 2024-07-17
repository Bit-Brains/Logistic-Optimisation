import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Main from './pages/Main'
import Product from './pages/Product'
import About from './pages/About'
import ContactUs from './pages/ContactUs'





function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, [])

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  }

  const handleLogout = (token) => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/About' element={<About category="About" />} />
          <Route path='/Items' element={<ShopCategory />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId ' element={<Product />} />
          </Route>
          <Route path='/login' element={isAuthenticated ? <Navigate to="/Items" /> : <LoginSignup handleLogin={handleLogin} />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
