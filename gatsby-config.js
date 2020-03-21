module.exports = {
  siteMetadata: {
    title: 'Rychillie',
    description: `Brazilian Front-End Developer`,
    author: `@rychillie`,
    siteUrl: `https://rychillie.net`
  },
  plugins: [
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
        icon: `${__dirname}/static/assets/images/unicorn.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
  ]
}
