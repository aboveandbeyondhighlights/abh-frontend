import { LOG_IN_SUCCESS } from './actionTypes';
import SessionApi from '../api/SessionApi';

export function loginSuccess() {
  return { type: LOG_IN_SUCCESS }
}

export function logInUser(credentials) {
  return function(dispatch) {
    return SessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    });
  };
}
