const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  // config options here
  cssLoaderOptions: {
    url: false
  }
})


const withLess = require('@zeit/next-less')
module.exports = withLess({
  cssModules: true
})

const withStylus = require('@zeit/next-stylus')
module.exports = withStylus({
  cssModules: true
})


const withImages = require('next-images')
module.exports = withImages()



const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// const webpack = require('webpack');
//   require('dotenv').config();
  
// module.exports = {
//   webpack: config => {
//     const env = Object.keys(process.env).reduce((acc, curr) => {
//       acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
//       return acc;
//     }, {})
//     config.plugins.push(new webpack.DefinePlugin(env))
//     return config;
//   }
// };