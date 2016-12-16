const path = require('path');
const autoprefixer = require('autoprefixer');
const poststylus = require('poststylus');
const webpack = require('webpack');
const ConfigPlugin = require('webpack-config-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'vendor': [
      // js
      'react',
      'redux',
      'selectn',
      'reselect',
      'react-dom',
      'normalizr',
      'classnames',
      'react-redux',
      'redux-thunk',
      'react-router',
      'react-router-redux',
      'redux-combine-actions',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ConfigPlugin({
      dir: path.join(__dirname, 'config')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/assets/index.html'),
      //favicon: path.join(__dirname, 'src/assets/favicon.ico')
    }),
    /*new CopyWebpackPlugin([{
        from: path.join(__dirname, 'src/assets/icons'),
        to: 'icons'
    }])*/
  ],
  resolve: {
    extensions: ['', '.js', '.css'],
    modulesDirectories: [ 
      'src',
      'node_modules'
    ],
    alias: {
      'src': path.join(__dirname, 'src'),
      'css': path.join(__dirname, 'src/css'),
      'img': path.join(__dirname, 'src/img'),
      'store': path.join(__dirname, 'src/js/store'),
      'utils': path.join(__dirname, 'src/js/utils'),
      'actions': path.join(__dirname, 'src/js/actions'),
      'reducers': path.join(__dirname, 'src/js/reducers'),
      'selectors': path.join(__dirname, 'src/js/selectors'),
      'constants': path.join(__dirname, 'src/js/constants'),
      'containers': path.join(__dirname, 'src/js/containers'),
      'components': path.join(__dirname, 'src/js/components'),
      'middleware': path.join(__dirname, 'src/js/middleware')
    }
  },
  module: {
    preLoaders: [
      // Eslint loader
      /*
      { 
        test: /\.jsx?$/, 
        loader: 'eslint', 
        include: path.join(__dirname, 'src') 
      },
      */
      // Stylus loader
      /*
      {
        test: /\.styl$/,
        loader: 'stylint'
      }
      */
    ],
    loaders: [
      { 
        test: /\.jsx?$/, 
        loader: 'babel', 
        include: path.join(__dirname, 'src') 
      },
      { 
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url?limit=500000' 
      },
      { 
        test: /\.json$/, 
        loader: 'json' 
      },
    ]
  },
  stylus: {
    use: [
      poststylus([ 
        autoprefixer({ browsers: ['last 3 versions'] }) 
      ])
    ]
  },
  eslint: {
    reporter: require("eslint-friendly-formatter"),
    quiet: true,
    failOnError: false,
    failOnWarning: false,
    emitError: false,
    emitWarning: false
  }
};
