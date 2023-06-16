import { Link } from 'gatsby';
import React from 'react';
import  '../styles/global.css'



function Navbar() {
  return ( 
    <nav>
      <img src="/jasperlogo.png" alt="site logo" style={{maxWidth: '10%'}}  />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
      </div>
      
    </nav>
   );
}

export default Navbar;