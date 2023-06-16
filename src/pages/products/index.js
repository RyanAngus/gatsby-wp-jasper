import React from 'react';
import Layout from '../../components/Layout';
import Product from './Product';
import * as styles from '../../styles/products.module.css'


const Products = () => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1 className={styles.title}>Products</h1>
        <Product />
      </div>
    </Layout>
  );
}
 
export default Products