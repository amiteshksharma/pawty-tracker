export interface AuthType {
  token?: string;
  lastLoggedIn?: string;
}

export interface UserInfoType {
  uid: string;
  username: string;
  email: string;
}

export interface AppStateItems {
  userInfo: UserInfoType;
  groups: string[];
  auth: AuthType;
  invalidLogin: number;
}

export interface AppState {
  appState: AppStateItems;
}
