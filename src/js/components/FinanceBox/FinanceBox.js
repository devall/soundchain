import React, { Component } from 'react';
import WalletImage from './Wallet.png';

import cx from './FinanceBox.styl';

function FinanceItem(props) {
  return (
    <div className={cx("finance__item")} {...props}>
      <div className={cx('finance__name')}>
        {props.name}
      </div>
      <div className={cx('finance__money')}>
        {props.children}
      </div>
    </div>
  )
}

export default class FinanceBox extends Component {
  render() {
    return (
      <div className={cx('finance')}>
        <div className={cx('finance__box')}>
          <div className={cx('finance__name')}>
            BALANCE
          </div>
          <img className={cx('finance__box__wallet')} src={WalletImage} alt='wallet'/>
        </div>
        <div className={cx('finance__content')}>
          <div className={cx('finance__content__top')}>
            <FinanceItem name="USD POLONIEX" style={{flex: 1}}>123456.12</FinanceItem>
            <FinanceItem name="ETC">123456.12</FinanceItem>
          </div>
          <div className={cx('finance__content__bottom')}>
            <div className={cx("finance__name")} style={{flex: 1}}>
              Today earned
            </div>
            <div className={cx("finance__today-earned")}>
              USD +3.0% ETC +3.0%
            </div>
          </div>
        </div>
      </div>
    )
  }
}
