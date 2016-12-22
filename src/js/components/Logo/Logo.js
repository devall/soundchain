import React, { Component } from 'react';
import cx from './Logo.styl';
import LogoImage from './Logo.png';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <a href='#' className={cx('logo')}>
          <img src={LogoImage} alt='logo' />
        </a>
      </div>
    )
  }
}
