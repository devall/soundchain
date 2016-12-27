import React from 'react'

import cx from '../TrackPlayerComponents.styl'

function LikeSvg(props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 30">
      <path className={cx("button__sound", {"button__sound--active" : props.isActive})} d="M2265.5,1379.92h-7.19a3.274,3.274,0,0,1-3.31-3.24v-7.38a3.274,3.274,0,0,1,3.31-3.24h6.85l8.25-5.56a1.288,1.288,0,0,1,1.93,1.09v22.84a1.293,1.293,0,0,1-1.93,1.09Zm19.2-19.06a16.912,16.912,0,0,1,0,24.28l2.92,2.86a20.886,20.886,0,0,0,0-30Zm-2.56,21.78a13.44,13.44,0,0,0,0-19.29l-2.92,2.86a9.455,9.455,0,0,1,0,13.57Z" transform="translate(-2255 -1358)"/>
    </svg>
  );
}

export function SoundButton(props) {
  return <LikeSvg className={props.className} isActive={props.isActive}/>
}