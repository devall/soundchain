import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from './SidebarBox.styl';
import LogoImage from '../../../assets/images/sprites/logo.png';

export default class SidebarBox extends Component {

  render() {
    return (
      <aside className={cx('sidebar-box')}>
        <div>
          <a href='#' className={cx('logo')}>
            <img src={LogoImage} alt='logo' />
            <h1>SOUNDCHAIN</h1>
          </a>
        </div>
        <div>FinanceBox</div>

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
