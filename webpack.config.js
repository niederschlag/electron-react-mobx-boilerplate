const path = require('path');
const webpack = require('webpack');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  devtool:'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
	use: [ 'babel-loader' ],
      },
      {
        test: /\.scss$/,
	exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    //new FlowBabelWebpackPlugin({warn: true}),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  target: 'electron-renderer'
};
