import React from 'react'

import cx from '../TrackPlayerComponents.styl'

function RepeatSvg(props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="31.03" viewBox="0 0 31.03 30">
      <path className={cx("button__repeat", {"button__repeat--active" : props.isActive})} d="M2209.75,1362.86l-7.09-4.76a0.579,0.579,0,0,0-.9.48v2.57h-20.19a2.189,2.189,0,0,0-2.19,2.19v11.62h4.38v-9.43h17.99v2.58a0.584,0.584,0,0,0,.91.48l7.08-4.77A0.575,0.575,0,0,0,2209.75,1362.86Zm-4.51,17.6h-17.99v-2.57a0.579,0.579,0,0,0-.9-0.48l-7.09,4.76a0.579,0.579,0,0,0,0,.97l7.08,4.76a0.584,0.584,0,0,0,.91-0.48v-2.58h20.17a2.187,2.187,0,0,0,2.19-2.18v-11.62h-4.38v9.42h0.01Z" transform="translate(-2179 -1358)"/>
    </svg>
  );
}

export function RepeatButton(props) {
  return <RepeatSvg className={props.className} isActive={props.isActive}/>
}