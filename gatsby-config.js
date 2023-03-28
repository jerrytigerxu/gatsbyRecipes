/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata:{
    title: 'Simply Recipes',
    description: "Nice and clean recipes site",
    author: "@jerrytigerxu",
    person: {name: "jere", age: 24},
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: "jere", age: 24 },
      { name: "spencer", age: 24}
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {

      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
