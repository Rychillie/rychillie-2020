module.exports = {
  siteMetadata: {
    title: 'Rychillie',
    description: `Brazilian Front-End Developer`,
    author: `@rychillie`,
    siteUrl: `https://rychillie.net`,
    titleTemplate: "%s · Rychillie",
    url: "https://rychillie.net",
    image: "/images/profile.png",
    twitterUsername: "@rychillie",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pt-br'
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`,
          `source sans-serif\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-45575876-4",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rychillie`,
        lang: `pt-br`,
        description: 'Desenvolvedor FrontEnd',
        short_name: `Rychillie`,
        start_url: `/`,
        background_color: `#2E3440`,
        theme_color: `#2E3440`,
        display: `standalone`,
        icon: `${__dirname}/static/images/unicorn.png`,
      },
    },
    //`gatsby-plugin-offline`,
  ],
}
