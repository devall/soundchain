import React from 'react'

import cx from '../TrackPlayerComponents.styl'

function ExtraSvg(props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 32 8">
      <path className={cx("button__more", {"button__more--active" : props.isActive})} d="M2023,587a4,4,0,1,1-4,4A4,4,0,0,1,2023,587Zm12,0a4,4,0,1,1-4,4A4,4,0,0,1,2035,587Zm12,0a4,4,0,1,1-4,4A4,4,0,0,1,2047,587Z" transform="translate(-2019 -587)"/>
    </svg>
  );
}

export function ExtraButton(props) {
  return <ExtraSvg className={props.className} isActive={props.isActive}/>
}