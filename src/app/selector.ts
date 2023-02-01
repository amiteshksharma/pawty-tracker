import {AppState} from './state';

export const selectState = (state: AppState) => {
  return state.appState;
};

export const selectUserInfo = (state: AppState) => {
  return state.appState.userInfo;
};

export const selectUsername = (state: AppState) => {
  return state.appState.userInfo.username;
};
