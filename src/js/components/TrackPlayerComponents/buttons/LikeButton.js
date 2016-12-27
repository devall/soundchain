import React from 'react'

import cx from '../TrackPlayerComponents.styl'

function LikeSvg(props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="28.5" viewBox="0 0 133.8 133.8">
      <path className={cx("button__like", {"button__like--active" : props.isActive})} d="M41.9,100.7L11.8,70.6C-2,56.8-2,34.3,11.8,20.5l0,0c13.8-13.8,36.3-13.8,50.1,0L92,50.6c13.8,13.8,13.8,36.3,0,50.1l0,0C78.2,114.5,55.6,114.5,41.9,100.7z"/>
      <path className={cx("button__like", {"button__like--active" : props.isActive})} d="M41.9,50.6l30.1-30.1c13.8-13.8,36.3-13.8,50.1,0l0,0c13.8,13.8,13.8,36.3,0,50.1L92,100.7c-13.8,13.8-36.3,13.8-50.1,0l0,0C28.1,86.9,28.1,64.4,41.9,50.6z"/>
      <path className={cx("button__like", {"button__like--active" : props.isActive})} d="M63.4,122.2L36.6,95.4c-1.9-1.9-1.9-5.1,0-7.1l26.8-26.8c1.9-1.9,5.1-1.9,7.1,0l26.8,26.8c1.9,1.9,1.9,5.1,0,7.1l-26.8,26.8C68.5,124.1,65.3,124.1,63.4,122.2z"/>
    </svg>
  );
}

export function LikeButton(props) {
  return <LikeSvg className={props.className} isActive={props.isActive}/>
}