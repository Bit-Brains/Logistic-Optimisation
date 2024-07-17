import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assests/logo.png'

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("shop");

  const logout = () => {
    handleLogout();
    navigate("/")
  }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>BITBRAINS</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link > {menu === "home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Men") }}><Link style={{ textDecoration: 'none' }} to='/About'>About</Link>{menu === "Men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Women") }}><Link style={{ textDecoration: 'none' }} to='/Category'>Category</Link>{menu === "Women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Kids") }}><Link style={{ textDecoration: 'none' }} to='/ContactUs'>Contact Us</Link>{menu === "Kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {isAuthenticated ? (<button onClick={logout} >Logout</button>) : (<Link to="/login"> <button>Login</button> </Link>)}


      </div>
    </div>
  )
}

export default Navbar
