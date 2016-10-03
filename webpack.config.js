const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + '/app',

  entry: {
    javascript: './app.jsx',
    html: './index.html',
  },

  output: {
    filename: 'app.js',
    path: __dirname + './dist',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?module&localIdentName=[local]---[hash:base64:5]', 'postcss', 'sass'],
      },
    ],
    postcss() {
      return [autoprefixer, precss];
    },
  },
};

// var path = require('path');
//
// const loaderConfig = [
//   {
//     test: /\.js$/,
//     loaders: ['babel'],
//     include: path.join(__dirname, 'src')
//   },
//   {
//     test: /\.scss$/,
//     loaders: ['style', 'css?module&localIdentName=[local]---[hash:base64:5]', 'postcss', 'sass']
//   },
//   {
//     test: /\.(png|jpg)$/,
//     loader: 'url-loader?limit=8192'
//   }
// ];
//
// module.exports = loaderConfig;
