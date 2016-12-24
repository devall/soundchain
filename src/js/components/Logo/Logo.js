import React, { Component } from 'react';
import cx from './Logo.styl';
import LogoImage from './Logo.png';

export default class Logo extends Component {
  render() {
    return (
      <a href='#' className={cx('logo')}>
        <img className={cx('logo__image')} src={LogoImage} alt='logo' />
      </a>
    )
  }
}
