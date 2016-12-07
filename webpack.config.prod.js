var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: process.env.BUILD_ENV === 'development' ? 'source-map' : '',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BUILD_ENV: JSON.stringify(process.env.BUILD_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    }
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, "src"),
      ]
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.md$/,
      loader: "raw-loader"
    },
    {
      test: /\.(png|jpg|jpeg|gif|woff)$/,
      loader: "url-loader?limit=100000"
    }]
  }
}
