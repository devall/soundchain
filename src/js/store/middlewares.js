import thunkMiddleware from 'redux-thunk';
import combineActions from 'redux-combine-actions';
// import { promiseMiddleware, apiMiddleware } from 'middleware';
import { Iterable } from 'immutable';

const middlewares = [
  thunkMiddleware,
  combineActions,
/*
  apiMiddleware,
  promiseMiddleware
*/
];

if (process.env.NODE_ENV === 'development') {
  const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) {
      return state.toJS();
    }
    return state;
  };

  const createLogger = require('redux-logger'); // eslint-disable-line
  middlewares.push(createLogger({ collapsed: true, stateTransformer }));
}

export default middlewares;
