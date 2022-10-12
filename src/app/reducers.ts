import { AppState, AppStateItems } from './state';
import { AnyAction } from 'redux';
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
  invalidLogin: 0
};

export const appState = (state: AppStateItems = initAppState, action: AnyAction) => {
  console.log(action);
  console.log('INSIDE ACTION: ' + action.type);

  console.log("the state below ===");
  console.log(state);
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
        invalidLogin: 0
      };
    }
    case 'LOGIN_FAIL': {
      return {
        ...state,
        invalidLogin: state.invalidLogin + 1
      }
    }
    default:
      return state;
  }
};
