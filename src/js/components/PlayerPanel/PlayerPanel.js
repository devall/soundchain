import React, { Component } from 'react';
import cx from './PlayerPanel.styl';

import MusicTrack from '../MusicTrack';

export default class PlayerPanel extends Component { // eslint-disable-line
  render() {
    //TODO temporary url: I don't know any ways to access other folders "dynamically", and webpack seems to not realize what I need
    return (
      <div className={cx('player-panel')}>
        <MusicTrack playerMode={true} albumImageUrl="https://pp.vk.me/c604817/v604817661/1a12c/s7ex-DUOodk.jpg"/>
      </div>
    );
  }
}
