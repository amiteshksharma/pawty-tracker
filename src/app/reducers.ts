import {AppState} from './state';
import {AnyAction} from 'redux';
/**
 * Get the current state
 *
 * @param state - current state object
 * @returns - the current state
 */

const initAppState = {
  userInfo: {
    username: '',
    email: '',
    uid: '',
  },
  groups: [],
  auth: {
    token: '',
    lastLoggedIn: '',
  },
};

export const appState = (state: AppState = initAppState, action: AnyAction) => {
  console.log(action);
  console.log('INSIDE ACTION: ' + action.type);
  switch (action.type) {
    case 'SIGNUP': {
      const user = action.payload?.user;
      const auth = action.payload?.auth;

      return {
        ...state,
        userInfo: {
          uid: user?.uid,
          username: user?.username,
          email: user?.email,
        },
        auth: {
          token: auth?.token,
          lastLoggedIn: auth?.lastLoggedIn,
        },
      };
    }
    case 'LOGIN': {
      const user = action.payload?.user;
      const auth = action.payload?.auth;

      return {
        ...state,
        userInfo: {
          uid: user?.uid,
          username: user?.username,
          email: user?.email,
        },
        auth: {
          token: auth?.token,
          lastLoggedIn: auth?.lastLoggedIn,
        },
      };
    }
    default:
      return state;
  }
};
