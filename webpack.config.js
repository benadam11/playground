var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
// var precss = require('precss');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel',
    }, 
    {
      test: /\.(scss|css)$/,
      loader: 'style!css!sass!postcss'
    }, 
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }],
  },
  postcss: function () {
    return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};