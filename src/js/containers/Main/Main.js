import React, { Component, PropTypes } from 'react';
/*
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import { toggleLeftPanel } from 'actions';
import { mainSelector } from 'selectors';
*/
import NavigationTop from '../../components/NavigationTop';
import SidebarBox from '../../components/SidebarBox';
import ContentBox from '../../components/ContentBox';
import PlayerPanel from '../../components/PlayerPanel';

import cx from './Main.styl';

/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleLeftPanel,
    pushState
  }, dispatch);
}

@connect(mainSelector, mapDispatchToProps)
*/
export default class Main extends Component {
  static propTypes = {
    // user: PropTypes.object.isRequired,
    // content: PropTypes.element.isRequired,
    allTicketsCount: PropTypes.number,
    unassignedTicketsCount: PropTypes.number,
    assignedTicketsCount: PropTypes.number,
    myTicketsCount: PropTypes.number,
    myClosedTicketsCount: PropTypes.number,
    closedTicketsCount: PropTypes.number,
    isExpandedLeftPanel: PropTypes.bool,
    toggleLeftPanel: PropTypes.func,
    pushState: PropTypes.func
  }

  render() {
    const { user, content, allTicketsCount, unassignedTicketsCount, toggleLeftPanel, isExpandedLeftPanel, assignedTicketsCount, myTicketsCount, closedTicketsCount, myClosedTicketsCount, pushState } = this.props;

    return (
      <section className={cx('main')}>
        <SidebarBox />

        <section className={cx('main__content')}>
          <NavigationTop
            user={user}
            pushState={pushState}
          />

          <ContentBox>
            {content}
          </ContentBox>

          <PlayerPanel />
        </section>

      </section>
    );
  }
}
