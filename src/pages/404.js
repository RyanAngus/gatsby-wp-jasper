import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function NotFound() {
  return ( 
    <div>
    <Navbar />
    <div>
      <h1>404</h1>
      <p>This page doesn't exist!</p>
    </div>
    <Footer />
    </div>
   );
}

export default NotFound;