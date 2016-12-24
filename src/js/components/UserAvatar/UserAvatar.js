import React from 'react'
import cx from './UserAvatar.styl'

export function UserAvatar(props) {
  return <img className={props.className + " " + cx("avatar-picture")} src={props.avatarUrl}/>
}

export default UserAvatar;
