import React, { Component, PropTypes } from 'react';
import cx from './AuthenticatedApp.styl';

/*
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchInitialDataIfNeeded, fetchTicketsCount } from 'actions';
import { authenticatedAppSelector } from 'selectors';
import Loader from 'components/Loader';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchInitialDataIfNeeded, fetchTicketsCount }, dispatch);
}

@connect(authenticatedAppSelector, mapDispatchToProps)
*/
export default class AuthenticatedApp extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    /*
    ready: PropTypes.bool.isRequired,
    fetchInitialDataIfNeeded: PropTypes.func.isRequired,
    fetchTicketsCount: PropTypes.func
    */
  }

  componentWillMount() {
    /*
    this.props.fetchInitialDataIfNeeded();
    this.props.fetchTicketsCount();
    */
  }

  render() {
    const { ready, children } = this.props;

    /*
    if (!ready) {
      return (<Loader />);
    }
    */

    return (
      <div className={cx('authenticated-app')}>
        {children}
      </div>
    );
  }
}
