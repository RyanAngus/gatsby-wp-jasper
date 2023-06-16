import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/blog.module.css'
import { Link, graphql } from 'gatsby';


const Blog = ({ data }) => {
  console.log(data)
  const blogs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.blog}>
        <h2>Blog Posts</h2>
        <div className={styles.projects}>
          {blogs.map(blog => (
            <Link to={"/projects/" + blog.frontmatter.slug} key={blog.id}>
                <div>
                  <img src="{'/images/' + blog.frontmatter.thumb.relativePath}" alt=""/>
                  <h3> { blog.frontmatter.title } </h3>
                  <p>{ blog.frontmatter.subtitle }</p>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
 
export default Blog

//export page query
export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        subtitle
        title
        featuredImg {
          relativePath
        }
        thumb {
          relativePath
        }
      }
      id
    }
  }
}
`
