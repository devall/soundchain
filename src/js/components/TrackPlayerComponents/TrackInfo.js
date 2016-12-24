import React from 'react';

import cx from './TrackPlayerComponents.styl'

export function TrackInfo(props) {
  return (
    <div className={cx("track-info")}>
      <span className={cx("track-info__album")}>
        {props.trackAlbum}
      </span>
      <span className={cx("track-info__name")}>
        {props.trackName}
      </span>
    </div>
  );
}
