module.exports = {
    siteUrl: 'https://builderseunegocioonline.com.br',
    generateRobotsTxt: true, // opcional
    priority: null,
    changefreq: null,
    exclude: ['/server-sitemap.xml', '/post/*'],
    robotsTxtOptions: {
      additionalSitemaps: ['https://builderseunegocioonline.com.br/server-sitemap.xml'],
    },
  }