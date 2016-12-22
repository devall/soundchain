import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo/Logo'
import FinanceBox from '../FinanceBox/FinanceBox'
import BottomPanel from '../BottomPanel/BottomPanel'

import { NavigationGroup, NavigationItem } from "../Navigation/Navigation"

import cx from './SidebarBox.styl';


export default class SidebarBox extends Component {
  render() {
    return (
      <aside className={cx('sidebar-box')}>
        <Logo />
        <FinanceBox />

        <div className={cx('sidebar-content')}>
          <NavigationGroup name="Principal">
            <NavigationItem isActive={true}>Stream</NavigationItem>
            <NavigationItem isActive={false}>Top 50</NavigationItem>
          </NavigationGroup>
          <NavigationGroup name="Playlist">
          </NavigationGroup>
          <NavigationGroup name="Artist panel">
          </NavigationGroup>
        </div>

        <BottomPanel>PlayerControls</BottomPanel>
      </aside>
    );
  }
}
