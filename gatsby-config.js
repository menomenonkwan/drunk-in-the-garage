/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Drunk In The Garage`,
    siteUrl: 'https://drunkinthegarage.com',
    description: 'The best beer band in the world!',
    twitter: '@DrunkNTheGarage',
    contact: 'Brannon Lee',
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/", "/news", "/lyrics", "/gallery"],
        excludePaths: [],
        color: "#CB3D54",
        height: 5,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
        color: `tomato`,
        // trickle: false,
        minimum: 0.4,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'f5hwivna',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN, 
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // `lato`,
          `lato\:300,400` // you can also specify font weights and styles
          // `lato\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
}