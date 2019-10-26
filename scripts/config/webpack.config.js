const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    path.resolve(__dirname, '..', '..', 'src', 'index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, '..', '..', 'public'),
    filename: 'bundle.js',
  },

  devtool: 'source-map', // 'eval' is not supported by error-overlay-webpack-plugin
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: false,
          failOnWarning: false,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
