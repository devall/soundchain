import React, { Component } from 'react';
import WalletImage from '../../../assets/images/sprites/big_wallet.jpg';

import cx from './FinanceBox.styl';

export default class FinanceBox extends Component {
  render() {
    return (
      <div className={cx('finance')}>
        <div className={cx('finance__item')}>
          <div className={cx('finance__name')}>
            BALANCE
          </div>
          <div className={cx('finance__info')}>
            <img src={WalletImage} alt='wallet'/>
          </div>
        </div>
        <div className={cx('finance__item')}>
          <div className={cx('finance__name')}>
            BALANCE
          </div>
          <div className={cx('finance__info')}>
            <img src={WalletImage} alt='wallet'/>
          </div>
        </div>
        <div className={cx('finance__item')}>
          <div className={cx('finance__name')}>
            BALANCE
          </div>
          <div className={cx('finance__info')}>
            <img src={WalletImage} alt='wallet'/>
          </div>
        </div>
      </div>
    )
  }
}
