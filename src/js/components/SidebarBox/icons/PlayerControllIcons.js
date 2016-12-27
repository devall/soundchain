import React, { Component, PropTypes } from 'react'
import cx from './PlayerControllIcons.styl'

//TODO move styles to it's own .styl

export function ButtonNextSong(props) {
  return (
    <svg className={cx("player-control-button", props.className)} xmlns="http://www.w3.org/2000/svg" width="76" viewBox="0 0 76 76">
      <circle className={cx("player-control-button__background-circle")} cx="38" cy="38" r="38"/>
      <path className={cx("player-control-button__player-element", "player-control-button__player-element--with-border")} d="M539.666,1373.5l-9.342,6.19v-12.37Z" transform="translate(-502 -1336)"/>
      <rect className={cx("player-control-button__player-element")} x="45" y="28" width="3" height="18" rx="1" ry="1"/>
    </svg>
  );
}

export function ButtonPrevSong(props) {
  return (
    <svg className={cx("player-control-button", props.className)} xmlns="http://www.w3.org/2000/svg" width="76" viewBox="0 0 76 76">
      <circle className={cx("player-control-button__background-circle")} cx="38" cy="38" r="38"/>
      <path className={cx("player-control-button__player-element", "player-control-button__player-element--with-border")} d="M306.476,1373.66l9.471,6.29v-12.57Z" transform="translate(-274 -1336)"/>
      <path className={cx("player-control-button__player-element")} d="M297,1364h1.041a1,1,0,0,1,1,1v16.3a1,1,0,0,1-1,1H297a1,1,0,0,1-1-1V1365A1,1,0,0,1,297,1364Z" transform="translate(-274 -1336)"/>
    </svg>
  );
}

export function ButtonPlay(props) {
  return (
    <svg className={cx("player-control-button", props.className)} xmlns="http://www.w3.org/2000/svg" width="76" viewBox="0 0 95 95">
      <circle className={cx("player-control-button__background-circle")} cx="47.5" cy="47.5" r="47.5"/>
      <path className={cx("player-control-button__player-element", "player-control-button__player-element--with-border")} d="M439.547,1373.5l-21.117,14.07v-28.15Z" transform="translate(-379 -1326)"/>
    </svg>
  );
}