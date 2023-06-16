import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import * as styles from '../../styles/blog.module.css'
import  '../../styles/global.css'
import { graphql } from 'gatsby';


const Blog = ({ data }) => {
  return (
    <div>
    <Navbar />
      <div className={styles.blog}>
        <h2 className={styles.title}>Blog Posts</h2>
        {data.allWpPost.nodes.map((node) => (
          <div key={node.id}>
            <h1 className={styles.postTitle}>{node.title}</h1>
            {node.featuredImage && (
              <img className={styles.postImage} src={node.featuredImage.node.sourceUrl} alt={node.title} />
            )}
            <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: node.content }} />
            <br />
            <hr />
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
query {
  allWpPost(sort: { fields: [date] }) {
    nodes {
      id
      title
      featuredImage {
        node {
          id
          sourceUrl
        }
      }
      excerpt
      content
      slug
      date(formatString: "MMMM DD, YYYY")
    }
  }
}
`

