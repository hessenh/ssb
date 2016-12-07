var path = require('path');
var webpack = require('webpack');
var HappyPack = require('happypack');

module.exports = {
  devtool: 'eval-cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BUILD_ENV: JSON.stringify(process.env.BUILD_ENV)
      }
    }),
    new HappyPack({
      // loaders is the only required parameter:
      loaders: ['babel'],
      threads: 4,
    })
  ],
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src'),
    ]
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'happypack/loader',
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }, {
      test: /\.md$/,
      loader: "raw-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.(png|jpg|jpeg|gif|woff)$/,
      loader: "url-loader?limit=100000"
    },
    { test: /\.json$/,
      loader: "json-loader"
    }]
  }
};
