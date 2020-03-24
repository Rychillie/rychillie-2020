module.exports = {
  siteMetadata: {
    title: 'Rychillie',
    description: `Brazilian Front-End Developer`,
    author: `@rychillie`,
    siteUrl: `https://rychillie.net`,
    titleTemplate: "%s · Rychillie",
    url: "https://rychillie.net",
    image: "/images/profile.jpg",
    twitterUsername: "@rychillie",
  },
  plugins: [
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 850,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              // Path to your Netlify CMS config file
              cmsConfig: `/static/admin/config.yml`
            }
          },
        ],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio/`,
        name: `portfolio`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-transition-link`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rychillie`,
        description: 'Brazilian Front-End Developer',
        short_name: `Rychillie`,
        start_url: `/`,
        background_color: `#FF5757`,
        theme_color: `#1A1A1A`,
        display: `standalone`,
        icon: `${__dirname}/static/images/unicorn.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-45575876-4",
      },
    },
    `gatsby-plugin-sass`,
  ],
}
