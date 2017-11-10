const path = require('path')
const webpack = require('webpack')

var config = {
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader',
        include: __dirname
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

var menuConfig = Object.assign({}, config, {
  entry: './src/leftmenu/index',
  output: {
    path: path.join(__dirname,'dist/leftmenu'),
    filename: 'bundle.js',
  },
})

var combo1Config = Object.assign({}, config, {
  entry: './src/combo1/index',
  output: {
    path: path.join(__dirname,'dist/combo1'),
    filename: 'bundle.js',
  },
})

var combo2Config = Object.assign({}, config, {
  entry: './src/combo2/index',
  output: {
    path: path.join(__dirname,'dist/combo2'),
    filename: 'bundle.js',
  },
})

var extrasConfig = Object.assign({}, config, {
  entry: './src/rightmenu/index',
  output: {
    path: path.join(__dirname,'dist/rightmenu'),
    filename: 'bundle.js',
  },
})

module.exports = [menuConfig, combo1Config, combo2Config, extrasConfig]
