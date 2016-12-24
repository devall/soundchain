import React from 'react'

import cx from './TrackPlayerComponents.styl'

export function TrackTimeline(props) {
  return (
    <div className="track-timeline">
      <span className={cx("track-timeline__current-time")}>0:02</span>
      <progress className={cx("track-timeline__progress-bar")} max="100" value="25"/>
      <span className={cx("track-timeline__total-time")}>4:06</span>
    </div>
  );
}