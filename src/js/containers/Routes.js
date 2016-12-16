// @flow
import React from 'react';
import { Route, Redirect } from 'react-router';

import App from './App';
import AnonymousApp from './AnonymousApp';
import AuthenticatedApp from './AuthenticatedApp';
import Main from './Main';
import { Stream } from './stream';
import { Login } from './login';
import NotFound from 'components/NotFound';

const requireAuth = (nextState, replace) => {
  /*
  if (!userIsLoggedInSelector(store.getState())) {
    replace({
      pathname: '/login',
      query: {
        return_to: [
          nextState.location.pathname,
          nextState.location.search
        ].join('')
      }
    });
  }
  */
}

const requireNotLoggedIn = (nextState, replace) => {
  /*
  if (userIsLoggedInSelector(store.getState())) {
    replace('/channels');
  }
  */
}

export default (
  <Route component={App}>
    <Redirect from="/" to="/stream" />

    <Route component={AnonymousApp}>
      <Route path="login" component={Login} onEnter={requireNotLoggedIn} />
    </Route>

    <Route component={AuthenticatedApp} onEnter={requireAuth} ignoreScrollBehavior>
      <Route component={Main}>
        <Route path="stream" components={{ content: Stream }} />
      </Route>
    </Route>

    <Route path="*" component={NotFound} />

  </Route>
);
