// @flow
import React, { Component, PropTypes } from 'react';
import cx from './AnonymousApp.styl';

export default class AnonymousApp extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className={cx('anonymous-app')}>
        {this.props.children}
      </div>
    );
  }
}
