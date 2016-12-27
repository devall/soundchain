import React from 'react'
import cx from './UserAvatar.styl'
import DefaultAvatarIcon from './IconDefaultAvatar.png'

export function UserAvatar(props) {
  return (
    <div className={cx("avatar__box", props.className)}>
      <img className={cx("avatar__picture")} src={props.avatarUrl ? props.avatarUrl : DefaultAvatarIcon}/>
      <div className={cx("avatar__box__children")}>
        {props.children}
      </div>
    </div>
  );
}

export default UserAvatar;
