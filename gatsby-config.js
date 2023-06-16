/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `http://jasper.local/graphql`,
      },
    },
    
  
  ],
  siteMetadata: {
    title: 'Ryan Angus',
    description: 'web dev portfolio',
    copyright: 'Copyright 2023 Angus Web Development'
  },
}