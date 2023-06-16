import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/products.module.css'


const Products = () => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Products</h2>
        <h3>Products and Websites I Recommend</h3>
      </div>
    </Layout>
  );
}
 
export default Products