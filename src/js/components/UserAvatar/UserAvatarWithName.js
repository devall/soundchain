import React from 'react'
import cx from './UserAvatar.styl'
import UserAvatar from './index.js'

export function UserAvatarWithName(props) {
  return <UserAvatar {...props}><div className={cx("username")}>{props.username}</div> {props.children}</UserAvatar>;
}
