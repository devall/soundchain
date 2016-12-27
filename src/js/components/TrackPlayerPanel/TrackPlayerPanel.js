import React, { Component } from 'react';
import cx from './TrackPlayerPanel.styl';

import MusicTrack from '../TrackPlayer';

export default class PlayerPanel extends Component { // eslint-disable-line
  render() {
    return (
      <div className={cx('player-panel')}>
        <MusicTrack playerMode={true} albumImageUrl="https://pp.vk.me/c604817/v604817661/1a12c/s7ex-DUOodk.jpg"/>
      </div>
    );
  }
}
