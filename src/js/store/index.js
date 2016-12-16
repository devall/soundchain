import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import reducer from 'reducers';
import middlewares from './middlewares';

let finalCreateStore;

// TODO: make it simple
if (process.env.NODE_ENV === 'development') {
  const debugSessionUri = window.location.href.match(/[?&]debug_session=([^&]+)\b/); // eslint-disable-line
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    require('containers/DevTools').default.instrument(), // eslint-disable-line
    require('redux-devtools').persistState(debugSessionUri) // eslint-disable-line
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
  )(createStore);
}

const initialState = fromJS({});
const store = finalCreateStore(reducer, initialState);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('reducers'); // eslint-disable-line
    store.replaceReducer(nextRootReducer);
  });
}

/* Create enhanced history object for router */
const createSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('router'); // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState(),
});

export { store, history };
