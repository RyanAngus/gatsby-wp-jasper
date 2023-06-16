import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Product from './Product';
import * as styles from '../../styles/products.module.css'


const Products = () => {
  return (
    <div>
    <Navbar />
      <div className={styles.portfolio}>
        <h1 className={styles.title}>Products</h1>
        <Product />
      </div>
    <Footer />
    </div>
  );
}
 
export default Products