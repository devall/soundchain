import React from 'react'

//TODO add small play button, and big pause button SVGs

import IconPauseSmall from './IconPauseSmall.svg'
import IconPlaySmall from './IconPauseSmall.svg'

import IconPause from './IconPlay.svg'
import IconPlay from './IconPlay.svg'

import cx from './TrackPlayerComponents.styl'

function PlayButtonController(props) {
  //TODO change to stateful component later.
  return <img className={(props.className ? props.className + " " : "") + cx("button__play")} src={props.isPlaying ? props.playIcon : props.pauseIcon}/>
}

export function SmallPlayButton(props) {
  return <PlayButtonController playIcon={IconPlaySmall} pauseIcon={IconPauseSmall} {...props}/>
}

export function PlayButton(props) {
  return <PlayButtonController playIcon={IconPlay} pauseIcon={IconPause} {...props}/>
}