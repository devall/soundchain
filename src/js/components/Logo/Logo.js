import React, { Component } from 'react';
import cx from './Logo.styl';
import LogoImage from '../../../assets/images/sprites/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <a href='#' className={cx('logo')}>
          <img src={LogoImage} alt='logo' />
          <h1 className={cx('logo-name')}>SOUNDCHAIN</h1>
        </a>
      </div>
    )
  }
}
