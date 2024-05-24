/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "note-ninjaa.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/secret-page"], // Exclude specific pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/secret-page",
      },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/additional-page"),
  ],
  // ...other options
};
