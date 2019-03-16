import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../modules/main/reducer';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function configureStoreProd(initialState) {
  const middlewares = [
    // Add other middleware on this line...
    routerMiddleware(history),
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
  ];

  return createStore(createRootReducer(history), initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

function configureStoreDev(initialState) {
  const middlewares = [
    // Add other middleware on this line...
    routerMiddleware(history),
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    // reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(createRootReducer(history), initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/main/reducer', () => {
      //const nextReducer = require('../modules/main/reducer').default; // eslint-disable-line global-require
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;