import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import configureStore, { history } from './store/configureStore';
import { ConnectedRouter } from 'connected-react-router/immutable';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import './main.css';

import main from './modules/main';

const store = configureStore();

render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Route path="/" component={main.Container} />
      </ConnectedRouter>
    </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
