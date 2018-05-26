module.exports = {
  siteMetadata: {
    title: "Example of gatsby-remark-vega",
    author: "Kevin Scott",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-external-links`,
          'gatsby-remark-copy-linked-files',
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-vega`,
        ],
        // plugins: [
        //   {
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 590,
        //     },
        //   },
        //   {
        //     resolve: `gatsby-remark-responsive-iframe`,
        //     options: {
        //       wrapperStyle: `margin-bottom: 1.0725rem`,
        //     },
        //   },
        //   'gatsby-remark-prismjs',
        //   'gatsby-remark-copy-linked-files',
        //   'gatsby-remark-smartypants',
        //   'gatsby-remark-vega',
        // ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
