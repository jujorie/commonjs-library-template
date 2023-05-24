const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

/** @type {import("webpack/types").Configuration} */
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    library: {
      type: 'commonjs',
    },
    path: path.resolve(process.cwd(), "lib")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
          }
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}