import React, { Component, PropTypes } from 'react';
import cx from './Navigation.styl';

export function NavigationGroup(props) {
  return (
    <div className={cx("navigation-group")}>
      <h3 className={cx("navigation-group-name")}>{props.name}</h3>
      {props.children}
    </div>
  );
}

//TODO add element with "React Router Link"-like color highlight
export function NavigationItem(props) {
  return (
    <div className={cx("navigation-item" + (props.isActive ? "-active" : ""))}>
      {props.icon}
      <div className={cx("navigation-item-name")}>{props.children}</div>
    </div>
  );
}
