import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
//If we have a token this means the user should be logged in
if(token) {
  //update the application state to set the logged in flag as true - using the dispatch method
  //which is available on the store object
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='/signin' component={Signin} />
        <Route path='/signout' component={Signout} />
        <Route path='/signup' component={Signup} />
        <Route path='/feature' component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('rootElm'));
