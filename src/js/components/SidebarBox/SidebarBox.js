import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo/Logo'
import FinanceBox from '../FinanceBox/FinanceBox'
import BottomPanel from '../BottomPanel/BottomPanel'

import { NavigationGroup, NavigationItem } from "../Navigation/Navigation"

import { ButtonNextSong, ButtonPlay, ButtonPrevSong } from './Icons';

import cx from './SidebarBox.styl';

function PlayerControls(props) {
  return (
    <div className={cx("sidebar-player")}>
      <div className={cx("sidebar-player-control")}>
        <ButtonPrevSong/>
      </div>
      <div className={cx("sidebar-player-control-big")}>
        <ButtonPlay/>
      </div>
      <div className={cx("sidebar-player-control")}>
        <ButtonNextSong/>
      </div>
    </div>);
}

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

        <BottomPanel><PlayerControls/></BottomPanel>
      </aside>
    );
  }
}
