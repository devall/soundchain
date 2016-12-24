import React from 'react'

import cx from './TrackPlayerComponents.styl'

function LikeSvg(props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="28.5" height="27.22" viewBox="0 0 28.5 27.22">
      <path className={cx("button__like", {"button__like--active" : props.isActive})} d="M2124.01,1386.18l-1.99-2.07c-7.41-6.8-12.26-11.38-12.26-17a7.876,7.876,0,0,1,7.84-8.13,8.177,8.177,0,0,0,12.82,0,7.876,7.876,0,0,1,7.84,8.13c0,5.62-4.84,10.2-12.25,17Z" transform="translate(-2109.75 -1358.97)"/>
    </svg>
  );
}

export function RepeatButton(props) {
  return <LikeSvg className={props.className} isActive={props.isActive}/>
}