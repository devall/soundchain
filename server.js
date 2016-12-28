const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.development');

const app = express();
const compiler = webpack(config);

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8090;

const hot = require('webpack-hot-middleware')(compiler);
const dev = require('webpack-dev-middleware')(compiler, {
    historyApiFallback: true,
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
});

app.use(dev);
app.use(hot);

app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result) {
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(PORT, HOST, err => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }

  console.log(`Listening at http://${HOST}:${PORT}`); // eslint-disable-line no-console
});
