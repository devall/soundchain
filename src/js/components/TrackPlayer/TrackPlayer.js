// @flow
import React, { Component } from 'react';
import cx from './TrackPlayer.styl';

import { LikeButton, RepeatButton, SoundButton, TrackInfo, TrackTimeline, PlayButton, SmallPlayButton, ExtraButton, FullTrackTimeline } from '../TrackPlayerComponents'

function CompactPlayer(props) {
  return (
    <div className={cx("track__player--compact")}>
      <div className={cx("track__player--compact__info")}>
        <TrackInfo trackAlbum="123 Something" trackName="Some pretty pretty long track name for some reason. Idk why it's so long, but ah well"/>
      </div>
      <div className={cx("track__player--compact__controls")}>
        <SmallPlayButton className={cx("track__player__button")}/>
        <TrackTimeline totalTime={123} played={30}/>
        <LikeButton className={cx("track__player__button--big")}/>
        <RepeatButton className={cx("track__player__button--big")}/>
        <SoundButton className={cx("track__player__button--big")}/>
      </div>
    </div>
  );
}

function FullPlayer(props) {
  return (
    <div className={cx("track__player--full")}>
      <div className={cx("track__player--full__context-top")}>
        <div className={cx("left")}>
          <PlayButton className={cx("track__player__button")}/>
          <TrackInfo trackAlbum="123 Something" trackName="Some track"/>
        </div>
        <div className={cx("right")}>
          <div className={cx("right__column")}>
            <div className={cx("right__column__item")}>
              <div className={cx("track__player__released-ago")}>
                3 month
              </div>
            </div>
            <div className={cx("right__column__item")}>
              <div className={cx("track__player__tag")}>
                #Electronic
              </div>
            </div>
          </div>
          <div className={cx("right__column")}>
            <div className={cx("right__column__item")}>
              <LikeButton/>
            </div>
            <div className={cx("right__column__item")}>
              <ExtraButton/>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("track__player--full__context-bottom")}>
        <FullTrackTimeline trackAudioInfo={props.trackAudioInfo} totalTime={123} played={30}/>
      </div>
    </div>
  );
}

export default class TrackPlayer extends Component {
  render() {
    const Player = this.props.playerMode === true ? CompactPlayer : FullPlayer;
    return (
      <div className={cx('track__box' + (this.props.playerMode ? "" : "--fullmode"))}>
        <img src={this.props.albumImageUrl} className={cx("track__box__album")}/>
        <Player {...this.props}/>
      </div>
    );
  }
}
