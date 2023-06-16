import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hi!</h2>
          <h3>I'm Jasper—</h3>
          <p>a tubby tabby from West Virginia.</p>
          <Link className={styles.btn} to="/products">My Favorite Things</Link>
        </div>
        <img src="/jasper.jpg" alt="headshot of cat" style={{maxWidth: '75%'}} />
      </section>
    </Layout>
  )
}
