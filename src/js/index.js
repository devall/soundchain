import React from 'react';
import { render } from 'react-dom';
import Root from 'containers/Root';
import 'css/index.styl';

const root = document.getElementById('root'); // eslint-disable-line

if (process.env.NODE_ENV === 'development') {
  const RedBox = require('redbox-react').default; // eslint-disable-line
  try {
    render(<Root />, root);
  } catch (e) {
    render(<RedBox error={e} />, root);
  }
} else {
  render(<Root />, root);
}
