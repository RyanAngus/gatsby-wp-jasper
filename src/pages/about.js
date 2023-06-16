import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/about.module.css'


function About() {
  return ( 
    <Layout>
    <div className={styles.about}>
    <h1>About Me</h1>
      <p>I'm a cat.
      </p>
    </div>
    </Layout>
   );
}

export default About;