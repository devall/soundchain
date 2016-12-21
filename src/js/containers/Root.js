import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import Routes from './Routes';
import { store, history } from '../store';

export default class Root extends Component { // eslint-disable-line
  renderDevTools() { // eslint-disable-line
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('./DevTools').default; // eslint-disable-line
      return <DevTools />;
    }
    return <div />;
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {Routes}
          </Router>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
