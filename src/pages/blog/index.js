import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import * as styles from '../../styles/blog.module.css'
import  '../../styles/global.css'
import { graphql } from 'gatsby';


const Blog = ({ data }) => {
  const blogItems = data.allDatoCmsBlogPost.edges;

  return (
    <div>
    <Navbar />
      <div className={styles.blog}>
        <h2 className={styles.title}>Blog Posts</h2>
        {blogItems.map(({ node: blogItem }) => (
          <div key={blogItem.id}>
            <h1 className={styles.postTitle}>{blogItem.title}</h1>
            <h2 className={styles.postDate}>Date: {blogItem.date}</h2>
            <img className={styles.postImage} src={blogItem.image.url} alt={blogItem.title} />
            <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: blogItem.bodyNode.childMarkdownRemark.html }} />

          </div>
         
        ))}
  
      </div>
    <Footer />
    </div>
  );
};
 
export default Blog

//export page query
export const query = graphql`
query MyQuery {
  allDatoCmsBlogPost(sort: {date: DESC}) {
    edges {
      node {
        title
        id
        image {
          url
        }
        body
        bodyNode {
          childMarkdownRemark {
            html
          }
        }
        date
      }
    }
  }
}

`

