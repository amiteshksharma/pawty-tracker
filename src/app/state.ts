export interface AuthType {
  token?: string;
  lastLoggedIn?: string;
}

export interface UserInfoType {
  uid: string;
  username: string;
  email: string;
}

export interface AppState {
  userInfo: UserInfoType;
  groups: string[];
  auth: AuthType;
}
