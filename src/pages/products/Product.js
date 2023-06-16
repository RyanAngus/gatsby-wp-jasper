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
          <div className={styles.productCard}  key={item.id}>
            <h1 className={styles.productTitle}>{item.title}</h1>
            <img className={styles.productThumbnail} src={item.thumbnail}></img>
            <h3 className={styles.productPrice}>Price: ${item.price}</h3>
            <h4 className={styles.productRating}>Jasper's Rating: {item.rating} / 5 paws</h4>
          </div>
        );
      })}
    </div>
  );
}
