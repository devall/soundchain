import React, { Component, PropTypes } from 'react';
import cx from './Navigation.styl';

export function NavigationGroup(props) {
  return (
    <div className={cx("navigation__group")}>
      <h3 className={cx("navigation__group__name")}>{props.name}</h3>
      {props.children}
    </div>
  );
}

//TODO add element with "React Router Link"-like color highlight
export function NavigationItem(props) {
  return (
    <div className={cx("navigation__item", {"navigation__item--active": props.isActive})}>
      <div className={cx("navigation__item__icon")}>{props.icon}</div>
      <div className={cx("navigation__item__name")}>{props.children}</div>
    </div>
  );
}
