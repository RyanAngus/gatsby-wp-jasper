import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as styles from '../styles/about.module.css'


function About() {
  return ( 
    <div>
    <Navbar />
    <div className={styles.about}>
    <h1>About Me</h1>
      <p>I'm a cat.
      </p>
    </div>
    <Footer />
    </div>
   );
}

export default About;