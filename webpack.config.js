const path = require("path");
const webpack = require('webpack');
const openBrowser = require('react-dev-utils/openBrowser');


const config = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    noInfo: true,
    port: 3000,
    stats: 'errors-only',
    after: function (app, server) {
      // const s;
      console.log('The server is up and running on port 3000');
      console.log('\x1b[33m%s\x1b[0m', 'Go to localhost:3000/ to view the app (人◕ω◕)')
      if (openBrowser('http://localhost:3000')) {
        console.log('The browser tab has been opened!');
      }
    },
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
          failOnWarning: true,
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};


module.exports = {
  ...config,
}
