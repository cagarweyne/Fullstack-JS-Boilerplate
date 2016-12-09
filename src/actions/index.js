import axios from 'axios';
import { browserHistory } from 'react-router';
import { types } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signUser({email, password}) {
  return function(dispatch) {
    //submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password }).then(response => {
      //if request is good...
      // -Update state to indicate the user is authenticated
      dispatch({type: types.AUTH_USER});
      // -Save the JWT token
      localStorage.setItem('token', response.data.token);
      // - redirect to the route '/feature'
      browserHistory.push('/feature');

    }).catch(err => {
      //If request is bad...
      // -Show an error to the user
      console.log('our error', err)
      dispatch(authError('Bad Login Info'));
    });
  }
}

export function signUpUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password }).then(response => {

      //if request is good...
      // -Update state to indicate the user is authenticated
      dispatch({type: types.AUTH_USER});
      // -Save the JWT token
      localStorage.setItem('token', response.data.token);
      // - redirect to the route '/feature'
      browserHistory.push('/feature');
    }).catch(err => {
      console.log('error signup', err);
      dispatch(authError(err.data.error));
    })
  }
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  //remove the token from the local
  localStorage.removeItem('token');

  return {
    type: types.UNAUTH_USER
  }
}

//make authenticated API requests using the jwt token
export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    }).then(response => {
      console.log(response);
    })
  }
}

