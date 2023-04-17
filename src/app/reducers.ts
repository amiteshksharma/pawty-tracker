import {AppStateItems} from './state';
import {AnyAction} from 'redux';

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
  invalidLogin: 0,
};

/**
 * Get the current state and update based on
 * dispatched action
 *
 * @param state - current state object
 * @returns - the current state
 */
export const appState = (
  state: AppStateItems = initAppState,
  action: AnyAction,
) => {
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
        invalidLogin: 0,
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
        invalidLogin: 0,
      };
    }
    case 'LOGIN_FAIL': {
      return {
        ...state,
        invalidLogin: state.invalidLogin + 1,
      };
    }
    case 'LOGOUT': {
      return {
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
        invalidLogin: 0,
      };
    }
    default:
      return state;
  }
};
