import React, { Component, PropTypes } from 'react';
import cx from './NavigationTop.styl';

import { LeftArrow, RightArrow, MinificationGlass } from './Icons';
import ProfilePanel from './ProfilePanel';

import { UserAvatar } from '../UserAvatar';
import defaultUserAvatar from './avatar.png';

export default class NavigationTop extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(PropTypes.object),
    toggleLeftPanel: PropTypes.func,
    pushState: PropTypes.func
  };

  render() {
    return (
      <nav className={cx('navigation-top')}>
        <div className={cx('navigation-top__element')}>
          <LeftArrow/>
        </div>
        <div className={cx('navigation-top__element')}>
          <RightArrow/>
        </div>
        <div className={cx('navigation-top__element')}>
          <MinificationGlass/>
        </div>
        <div className={cx('navigation-top__element', 'navigation-top__element--main')}>
          <input className={cx('navigation-top__search')} type="text" placeholder="Search"/>
        </div>
        <div className={cx('navigation-top__element')}>
          <ProfilePanel/>
        </div>
        <UserAvatar className={cx('navigation-top__element--avatar')} avatarUrl={defaultUserAvatar}/>
      </nav>
    );
  }
}
