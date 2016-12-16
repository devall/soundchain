import React, { Component, PropTypes } from 'react';
import cx from './Login.styl';

/*
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

import Loader from 'components/Loader';
import LoginForm from 'components/LoginForm';
import { loginContainerSelector } from 'selectors';
import { registrationSubmit, loginSubmit, checkAuth } from 'actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    registrationSubmit,
    loginSubmit,
    checkAuth,
    replace
  }, dispatch);
}

@connect(loginContainerSelector, mapDispatchToProps)
*/
export default class Login extends Component {

  static propTypes = {
    nextPathname: PropTypes.string,
    isLoginLoading: PropTypes.bool,
    isCheckAuthLoading: PropTypes.bool,
    registrationSubmit: PropTypes.func,
    loginSubmit: PropTypes.func,
    checkAuth: PropTypes.func,
    errors: PropTypes.array,
    replace: PropTypes.func
  }

  componentWillMount() {
    //this.props.checkAuth();
  }

  componentWillReceiveProps(nextProps) {
    /*
    if (nextProps.user) {
      this.props.replace(this.props.nextPathname);
    }
    */
  }

  render() {
    const { registrationSubmit, loginSubmit, isLoginLoading, isCheckAuthLoading, errors } = this.props;

    /*
    if (isCheckAuthLoading) {
      return (<Loader />);
    }
    */

    return (
      <div className={cx('login')}>
        <div className={cx('login__left')}>
          Logo
        </div>

        <div className={cx('login__right')}>
          Slogan
          {/*
          <LoginForm
            onLogin={loginSubmit}
            onRegistration={registrationSubmit}
            inProgress={isLoginLoading}
            errors={errors}
          />
          */}
        </div>
      </div>
    );
  }
}
