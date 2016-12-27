import React from 'react'

//TODO add small play button, and big pause button SVGs

import IconPauseSmall from '../icons/IconPauseSmall.svg'
import IconPlaySmall from '../icons/IconPauseSmall.svg'

import IconPause from '../icons/IconPlay.svg'
import IconPlay from '../icons/IconPlay.svg'

import cx from '../TrackPlayerComponents.styl'

function PlayButtonController(props) {
  //TODO change to stateful component later.
  return <img className={cx("button__play", {"button__play--active" : props.isActive}, props.className)} src={props.isPlaying ? props.playIcon : props.pauseIcon}/>
}

export function SmallPlayButton(props) {
  return <PlayButtonController playIcon={IconPlaySmall} pauseIcon={IconPauseSmall} {...props}/>
}

export function PlayButton(props) {
  return <PlayButtonController playIcon={IconPlay} pauseIcon={IconPause} {...props}/>
}