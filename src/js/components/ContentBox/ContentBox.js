import React, { Component, PropTypes } from 'react';
import cx from './ContentBox.styl';

export default class ContentBox extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <main className={cx('content-box')}>
        <section className={cx('content-box__content')}>
          {children}
        </section>
      </main>
    );
  }
}
