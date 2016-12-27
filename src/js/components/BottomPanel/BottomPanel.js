import React, { Component } from 'react';

import cx from './BottomPanel.styl';


export default function BottomPanel(props) {
  return <div className={cx("panel", {"panel--light-line": props.isLineLight})}>{props.children}</div>;
}