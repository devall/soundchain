// @flow
import React, { Component } from 'react';
import { range } from 'lodash';
import cx from './Stream.styl';

export default class Stream extends Component {
  render() {
    return (
      <div className={cx('stream')}>
        <div>Component top</div>
        <div className={cx('stream__content')}>
          {range(1,50).map((v, i) => <div key={i}>StreamTrack</div>)}
        </div>
      </div>
    );
  }
}
