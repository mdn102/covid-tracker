const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  // config options here
  cssLoaderOptions: {
    url: false
  }
})

const withImages = require('next-images')
module.exports = withImages()