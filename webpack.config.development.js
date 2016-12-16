const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.config.base');

const baseConfig = Object.create(webpackBaseConfig);

baseConfig.devtool = 'eval';

baseConfig.entry.main = [
  'webpack-hot-middleware/client',
  './src/js/index.js'
];

baseConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
);

baseConfig.module.loaders.push({
  test: /\.(css|styl)$/, 
  include: /(src)/,
  loader: 'classnames!style!css?importLoaders=1&localIdentName=[local]---[name]---[hash:base64:5]!stylus'
});

baseConfig.module.loaders.push({
  test: /\.(css)$/, 
  include: /(node_modules\/normalize.css)/,
  loader: 'classnames!style!css?importLoaders=1&localIdentName=[local]---[name]---[hash:base64:5]!stylus'
});


module.exports = baseConfig;
