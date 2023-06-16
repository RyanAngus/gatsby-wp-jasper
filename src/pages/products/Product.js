import React, { useState, useEffect } from 'react';
import * as styles from '../../styles/products.module.css'

export default function Product() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?skip=0&limit=10");
      const data = await res.json();
      const newItems = data.products; // Assuming the array of items is stored in the "products" property of the response object
      setItems(newItems);
      console.log(items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={styles.productPage}>
      {items.map((item) => {
        return (
          <div  key={item.id}>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
