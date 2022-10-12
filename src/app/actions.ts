import { UserInfoType, AuthType } from './state';

export const signupAction = (user: UserInfoType, auth: AuthType) => {
  return {
    type: 'SIGNUP',
    payload: {
      user,
      auth,
    },
  };
};

export const loginAction = (user: UserInfoType, auth: AuthType) => {
  return {
    type: 'LOGIN',
    payload: {
      user,
      auth,
    },
  };
};

export const LoginFailAction = () => {
  return {
    type: 'LOGIN_FAIL'
  }
}
