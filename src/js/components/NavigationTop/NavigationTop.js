import React, { Component, PropTypes } from 'react';
import cx from './NavigationTop.styl';

export default class NavigationTop extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(PropTypes.object),
    toggleLeftPanel: PropTypes.func,
    pushState: PropTypes.func
  };

  render() {
    return (
      <nav className={cx('navigation-top')}>
        Navigation top
      </nav>
    );
  }
}
