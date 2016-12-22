import React, { Component } from 'react';
import WalletImage from './Wallet.png';

import cx from './FinanceBox.styl';

function FinanceItem(props) {
  return (
    <div className={cx("finance-item")} {...props}>
      <div className={cx('finance-name')}>
        {props.name}
      </div>
      <div className={cx('finance-money')}>
        {props.children}
      </div>
    </div>
  )
}

export default class FinanceBox extends Component {
  render() {
    return (
      <div className={cx('finance')}>
        <div className={cx('finance-box')}>
          <div className={cx('finance-name')}>
            BALANCE
          </div>
          <img className={cx('finance-box-wallet')} src={WalletImage} alt='wallet'/>
        </div>
        <div className={cx('finance-content')}>
          <div className={cx('finance-content-top')}>
            <FinanceItem name="USD POLONIEX" style={{flex: 1}}>123456.12</FinanceItem>
            <FinanceItem name="ETC">123456.12</FinanceItem>
          </div>
          <div className={cx('finance-content-bottom')}>
            <div className={cx("finance-name")} style={{flex: 1}}>
              Today earned
            </div>
            <div className={cx("finance-today-earned")}>
              USD +3.0% ETC +3.0%
            </div>
          </div>
        </div>
      </div>
    )
  }
}
