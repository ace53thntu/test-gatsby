module.exports = {
  siteMetadata: {
    title: `CloudSolar`,
    siteUrl: `https://cloud.solar`,
    description: `CloudSolar - Online Renewable Energy Investment Platform in Barbados`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cloud Solar',
        short_name: 'CloudSolar',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-hubspot',
      options: {
        trackingCode: '7115831',
        respectDNT: true,
        productionOnly: false,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': ['X-Frame-Options: SAMEORIGIN'],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          'script-src':
            "'self' https://js.hs-analytics.net/ https://js.hs-scripts.com/7115831.js https://js.hscollectedforms.net/collectedforms.js https://js.hs-banner.com/7115831.js https://js.usemessages.com/conversations-embed.js https://d33wubrfki0l68.cloudfront.net/",
          'style-src': "'self' 'unsafe-inline'",
          'img-src':
            "'self' 'unsafe-inline' data: https://forms.hsforms.com/ https://track.hubspot.com/ https://d33wubrfki0l68.cloudfront.net/",
          'form-action': `'self' forms.hubspot.com forms.hsforms.com`,
          'default-src': `'self' https: 'unsafe-eval' 'unsafe-inline'`,
          // 'default-src': `'self'`,
          'connect-src': `'self' https:`,
          'font-src': `'self' data: https://d33wubrfki0l68.cloudfront.net/`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha256', // 'sha256', 'sha384' or 'sha512' ('sha512' = default)
        crossorigin: true, // Optional
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sri',
    //   options: {
    //     hash: 'sha512', // 'sha256', 'sha384' or 'sha512' ('sha512' = default)
    //     crossorigin: true, // Optional
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
    // `gatsby-plugin-fontawesome-css`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
  ],
}
