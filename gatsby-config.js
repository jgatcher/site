module.exports = {
  siteMetadata: {
    title: 'megatchr-wip',
  },
  plugins: ['gatsby-plugin-netlify-cms','gatsby-plugin-react-helmet',{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      }},]
};
