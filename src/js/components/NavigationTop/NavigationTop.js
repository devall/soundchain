import React, { Component, PropTypes } from 'react';
import cx from './NavigationTop.styl';

import { LeftArrow, RightArrow, MinificationGlass } from './Icons';

export default class NavigationTop extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(PropTypes.object),
    toggleLeftPanel: PropTypes.func,
    pushState: PropTypes.func
  };

  render() {
    return (
      <nav className={cx('navigation-top')}>
        <div className={cx('navigation-top-element')}>
          <LeftArrow/>
        </div>
        <div className={cx('navigation-top-element')}>
          <RightArrow/>
        </div>
        <div className={cx('navigation-top-element')}>
          <MinificationGlass/>
        </div>
        <div className={cx('navigation-top-element', 'navigation-top-element-main')}>
          <input className={cx('navigation-top-search')} type="text" placeholder="Search"/>
        </div>
        <div className={cx('navigation-top-element')}>
          User info
        </div>
      </nav>
    );
  }
}
