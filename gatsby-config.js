module.exports = {
  siteMetadata: {
    title: 'CamJC - Senior Developer (Front-End)',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "CamJC - Senior Developer (Front-End)",
        "short_name": "CamJC",
        "theme_color": "#74cae6",
        "background_color": "#525b5f",
        "display": "minimal-ui",
        "Scope": "/",
        "start_url": "/",
        "icons": [
          {
            "src": "favicons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        "splash_pages": null,
      },
    },
  'gatsby-plugin-offline',
  'gatsby-plugin-netlify', // make sure to put last in the array
  ],
};
