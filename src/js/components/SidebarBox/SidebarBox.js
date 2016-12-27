import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo/Logo'
import FinanceBox from '../FinanceBox/FinanceBox'
import BottomPanel from '../BottomPanel/BottomPanel'

import { NavigationGroup, NavigationItem } from "../Navigation/Navigation"

import { ButtonNextSong, ButtonPrevSong, ButtonPlay } from './icons/PlayerControllIcons';

import cx from './SidebarBox.styl';

import StreamIcon from "./icons/ico_Stream.png";
import Top50Icon from "./icons/ico_top50";
import NewChartsIcon from "./icons/ico_new_charts.png";
import FavsIcon from "./icons/ico_favourite";
import FollowingIcon from "./icons/ico_Followin";

function PlayerControls(props) {
  return (
    <div className={cx("sidebar__player")}>
      <ButtonPrevSong className={cx("sidebar__player__control")}/>
      <ButtonPlay className={cx("sidebar__player__control--big")}/>
      <ButtonNextSong className={cx("sidebar__player__control")}/>
    </div>
  );
}

export default class SidebarBox extends Component {
  render() {
    return (
      <aside className={cx('sidebar-box')}>
        <Logo />
        <FinanceBox />

        <div className={cx('sidebar__content')}>
          <NavigationGroup name="Principal">
            <NavigationItem icon={<img src={StreamIcon}/>} isActive={true}>Stream</NavigationItem>
            <NavigationItem icon={<img src={Top50Icon}/>} isActive={false}>Top 50</NavigationItem>
            <NavigationItem icon={<img src={NewChartsIcon}/>} isActive={false}>New charts</NavigationItem>
            <NavigationItem icon={<img src={FavsIcon}/>} isActive={false}>Favourites</NavigationItem>
            <NavigationItem icon={<img src={FollowingIcon}/>} isActive={false}>Following</NavigationItem>
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
