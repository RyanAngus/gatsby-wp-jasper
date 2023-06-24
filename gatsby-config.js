/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */ 

require("dotenv").config()

module.exports = {
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  
  ],
  siteMetadata: {
    title: 'Ryan Angus',
    description: 'web dev portfolio',
    copyright: 'Copyright 2023 Angus Web Development'
  },
}