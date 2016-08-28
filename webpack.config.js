"use strict";

const path    = require("path");
const webpack = require("webpack");

const root = __dirname;

module.exports = function() {

  let options = {
    watch: false,
    context: root,
    entry: {
      app: ["./src/index"],
      vendor: ["angular", "angular-ui-router"]
    },
    output: {
      path: path.join(root, "./out/"),
      filename: "[name].js",
      chunkFilename: "[id].js",
      publicPath: "",
      pathinfo: false
    },
    debug: true,
    devtool: "module-inline-source-map",
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity
      })
    ],
    resolve: {
      extensions: [".js", ".ts"]
    },
    module: {
      loaders: [{
        test: /\.ts$/,
        loader: "ts-loader",
        include: [
          path.join(root, "./src")
        ],
        query: {}
      }, {
        test: /\.html$/,
        loader: "html-loader",
        include: [
          path.join(root, "./src")
        ]
      }],
      noParse: [
        /angular\/angular.js/
      ]
    }
  };

  return options;
};
