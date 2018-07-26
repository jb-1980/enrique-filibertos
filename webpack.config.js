const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const pathsToClean = ["dist"]

var config = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader",
        include: __dirname,
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CleanWebpackPlugin(pathsToClean, {
      watch: false,
      exclude: ["index.html"],
    }),
  ],
}

var menuConfig = Object.assign({}, config, {
  entry: "./src/leftmenu/index",
  output: {
    path: path.join(__dirname, "dist/leftmenu"),
    filename: "bundle.[chunkHash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/leftmenu/index.html",
      inject: false,
    }),
  ],
})

var combo1Config = Object.assign({}, config, {
  entry: "./src/combo1/index",
  output: {
    path: path.join(__dirname, "dist/combo1"),
    filename: "bundle.[chunkHash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/combo1/index.html",
      inject: false,
    }),
  ],
})

var combo2Config = Object.assign({}, config, {
  entry: "./src/combo2/index",
  output: {
    path: path.join(__dirname, "dist/combo2"),
    filename: "bundle.[chunkHash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/combo2/index.html",
      inject: false,
    }),
  ],
})

var extrasConfig = Object.assign({}, config, {
  entry: "./src/rightmenu/index",
  output: {
    path: path.join(__dirname, "dist/rightmenu"),
    filename: "bundle.[chunkHash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/rightmenu/index.html",
      inject: false,
    }),
  ],
})

module.exports = [menuConfig, combo1Config, combo2Config, extrasConfig]
