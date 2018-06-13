// https://www.gatsbyjs.org/docs/environment-variables/
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
module.exports = {
  siteTitle: "Australian Roundhouses", // Site title.
  siteTitleAlt: "GatsbyJS vs WordPress Variation", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://australianroundhouses.com.au", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-wordpress-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater with the WordPress API built  in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Construction", // Default category for posts.
  userName: "User", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Goulburn, NSW Australia", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://github.com/lukethacoder/ar_gatsby_wordpress",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Email",
      url: "mailto:hello@lukesecomb.digital",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Australian Roundhouses", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
