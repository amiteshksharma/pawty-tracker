interface AuthObj {
  token: string;
  lastLoggedIn: string;
}

export interface AppState {
  username: string;
  email: string;
  groups: string[];
  auth: AuthObj;
  test: string;
}
