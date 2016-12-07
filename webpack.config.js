var path = require('path')
var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.s?css$/,
      loaders: ['style','css','sass'],
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
