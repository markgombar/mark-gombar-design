module.exports = {
  siteMetadata: {
    siteUrl: "https://markg.design",
    fontEmbed: "https://use.typekit.net/jfd8lke.css",
    mainTitle: "Mark Gombar's Design Portfolio - Web & UI Designer and UX Engineer",
    headline: "Web & UI Designer and UX Engineer",
    titleTemplate: "Mark Gombar's Design Portfolio",
    author: "Mark Gombar",
    mainDescription: "Mark Gombar is a Senior Web & UI Designer and UX Engineer, this is his online portfolio. He is a United States citizen located in Connecticut."
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "282531458",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
