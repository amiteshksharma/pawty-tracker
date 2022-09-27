import {AppState} from './state';
/**
 * Get the current state
 *
 * @param state - current state object
 * @returns - the current state
 */

const initAppState = {
  username: '',
  email: '',
  groups: [],
  auth: {
    token: '',
    lastLoggedIn: '',
  },
  test: '',
};

export const appState = (state: AppState = initAppState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        test: 'testing worked!',
      };
    default:
      return state;
  }
};
