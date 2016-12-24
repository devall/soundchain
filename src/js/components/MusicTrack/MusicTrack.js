// @flow
import React, { Component } from 'react';
import cx from './MusicTrack.styl';

import { LikeButton, RepeatButton, SoundButton, TrackInfo, TrackTimeline, PlayButton, SmallPlayButton } from '../TrackPlayerComponents'

function CompactPlayer(props) {
  return (
    <div className={cx("track__player--compact")}>
      <TrackInfo trackAlbum="123 Something" trackName="Some track"/>
      <SmallPlayButton className={cx("track__player__button")}/>
      <TrackTimeline totalTime={123} played={30}/>
      <LikeButton className={cx("track__player__button")}/>
      <RepeatButton className={cx("track__player__button")}/>
      <SoundButton className={cx("track__player__button")}/>
    </div>
  );
}

function FullPlayer(props) {
  return (
    <div className={cx("track__player--full")}>
      <div className={cx("track__player--full__context-top")}>
        <PlayButton className={cx("track__player__button")}/>
        <TrackInfo trackAlbum="123 Something" trackName="Some track"/>
      </div>
      <div className={cx("track__player--full__context-bottom")}>
      </div>
    </div>
  );
}

export default class MusicTrack extends Component {
  render() {
    const Player = this.props.playerMode === true ? CompactPlayer : FullPlayer;
    return (
      <div className={cx('track__box' + (this.props.playerMode ? "" : "--fullmode"))}>
        <img src={this.props.albumImageUrl} className={cx("track__box__album")}/>
        <Player/>
      </div>
    );
  }
}
