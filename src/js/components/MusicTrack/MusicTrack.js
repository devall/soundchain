// @flow
import React, { Component } from 'react';
import cx from './MusicTrack.styl';

function CompactPlayer(props) {
  return (
    <div>
      Compact
    </div>
  );
}

function FullPlayer(props) {
  return (
    <div>
      Full
    </div>
  );
}

export default class MusicTrack extends Component {
  render() {
    const Player = this.props.playerMode ? CompactPlayer : FullPlayer;
    return (
      <div className={cx('trackbox')}>
        <img src={this.props.albumImageUrl} className={cx("trackbox-album")}/>
        <div className={this.props.playerMode ? "trackbox-player" : "trackbox-fullmode"}>
          <div className={cx("trackbox-info")}>
            <span className={cx("trackbox-info-album")}>
              Playing from top 50 tracks
            </span>
            <span className={cx("trackbox-info-name")}>
              Desiigner- "Panda" (Prod. By: Menace)
            </span>
          </div>
          <Player/>
        </div>
      </div>
    );
  }
}
