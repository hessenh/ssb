import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import concat from 'lodash/concat';
import rootReducer from '../reducers';
import middleware from './middleware';

const routingMiddleware = routerMiddleware(browserHistory);

const enhancer = compose(...concat([
  applyMiddleware(thunk),
  applyMiddleware(routingMiddleware),
], middleware));

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default), // eslint-disable-line global-require
    );
  }

  return store;
}
