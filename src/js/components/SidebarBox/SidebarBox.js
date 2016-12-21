import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo/Logo'
import FinanceBox from '../FinanceBox/FinanceBox'
import cx from './SidebarBox.styl';


export default class SidebarBox extends Component {

  render() {
    return (
      <aside className={cx('sidebar-box')}>
        <Logo />
        <FinanceBox />

        <div className={cx('nav')}>
          <nav className={cx('nav-list')}>
            <div className={cx('nav-list__title')}>Nav title</div>
            <Link to="/login" className={cx('nav-list__item')}>Test link</Link>
          </nav>

          <nav className={cx('nav-list')}>
            <div className={cx('nav-list__title')}>Nav title</div>
            <Link to="/login" className={cx('nav-list__item')}>Test link</Link>
          </nav>
        </div>

        <div>PlayerControls</div>
      </aside>
    );
  }
}
