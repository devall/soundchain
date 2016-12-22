// @flow
import React, { Component } from 'react';
import { range } from 'lodash';
import cx from './Stream.styl';

export default class Stream extends Component {
  render() {
    return (
      <div className={cx('stream')}>
        <div className={cx("stream-top")}>
          <div className={cx("stream-top-title")}>
            <p className={cx("stream-top-title-header")}>
              Stream
            </p>
            <p className={cx("stream-top-title-desc")}>
              Hear the latest ...
            </p>
          </div>
        </div>
        <div className={cx('stream-content')}>
          {range(1,50).map((v, i) => <div key={i}>StreamTrack</div>)}
        </div>
      </div>
    );
  }
}
