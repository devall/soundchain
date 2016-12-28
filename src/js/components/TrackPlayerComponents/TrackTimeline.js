import React from 'react'
import _ from 'lodash'
import cx from './TrackPlayerComponents.styl'

export function TrackTime(props) {
  return <div className={props.className}>{Math.floor(props.time / 60)}:{_.padStart(props.time % 60, 2, "0")}</div>;
}

export function TrackTimeline(props) {
  return (
    <div className={cx("track-timeline", props.className)}>
      <TrackTime time={props.played} className={cx("track-timeline__current-time")}/>
      <progress className={cx("track-timeline__progress-bar")} max={props.totalTime} value={props.played}/>
      <TrackTime time={props.totalTime} className={cx("track-timeline__total-time")}/>
    </div>
  );
}