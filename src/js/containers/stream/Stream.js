// @flow
import React, { Component } from 'react';
import { range } from 'lodash';
import cx from './Stream.styl';

import MusicTrack from '../../components/TrackPlayer';
import SteamBackgroundImage from './background.png'
import { UserAvatarWithName } from "../../components/UserAvatar";

//TODO there is no such things as track right now, so all information about track is send as props
//Change props to track when track would be avalible
function StreamItem() {
  return (
    <div>
      <UserAvatarWithName className={cx("stream__item__user-box")} username="blah"><div className="stream__item__user-box__info-text">Reposted a track 2 days ago</div></UserAvatarWithName>
      <MusicTrack
        albumImageUrl="https://pp.vk.me/c604817/v604817661/1a12c/s7ex-DUOodk.jpg"
        trackAudioInfo={range(1, 800).map(Math.random)}
      />
    </div>
  );
}

export default class Stream extends Component {
  render() {
    return (
      <div className={cx('stream')}>
        <div className={cx('stream__top')}>
          <img className={cx('stream__top__background')} src={SteamBackgroundImage}/>
          <div className={cx('stream__top__context')}>
            <div className={cx('stream__top__title')}>
              <p className={cx('stream__top__title__header')}>
                Stream
              </p>
              <p className={cx('stream__top__title__desc')}>
                Hear the latest post from the people you’re following
              </p>
            </div>
          </div>
        </div>
        <div className={cx('stream-content')}>
          {range(1, 5).map((v, i) => <StreamItem/>)}
        </div>
      </div>
    );
  }
}
