import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from 'containers/Root';
import 'css/index.styl';

const root = document.getElementById('root'); // eslint-disable-line

if (process.env.NODE_ENV === 'development') {
  const RedBox = require('redbox-react').default; // eslint-disable-line
  try {
    render(<Root />, root);

    if (module.hot) {
      module.hot.accept('./containers/Root', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <Root /> here rather than require() a <NextRoot />.
        const NextRoot = require('./containers/Root').default;
        render(<AppContainer><NextRoot /></AppContainer>, root);
      });
    }
  } catch (e) {
    render(<RedBox error={e} />, root);
  }
} else {
  render(<Root />, root);
}
