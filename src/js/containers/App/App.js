// @flow
import React, { Component, PropTypes } from 'react';
// import 'electron-titlebar';
import cx from './App.styl';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className={cx('app')}>
        {/* <div id='electron-titlebar' className='drag' /> */}
        <div className={cx('app__content')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
