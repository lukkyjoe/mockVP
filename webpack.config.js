var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './dist/component.js',
  output: {
    path: __dirname + "/bundle",
    filename: 'bundle.js',
  }
  // module: {
  //   loaders: [
  //     {
  //       test: /.jsx?$/,
  //       loader: 'babel-loader',
  //       include: path.join(__dirname, 'src'),
  //       exclude: /node_modules/,
  //       query: {
  //         presets: ['es2015', 'react']
  //       }
  //     }
  //   ]
  // },
};

// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   entry: path.join(__dirname, 'src', 'app-client.js'),
//   output: {
//     path: path.join(__dirname, 'src', 'static', 'js'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: path.join(__dirname, 'src'),
//       loader: ['babel-loader'],
//       query: {
//         cacheDirectory: 'babel_cache',
//         presets: ['react', 'es2015']
//       }
//     }]
//   }
// }
