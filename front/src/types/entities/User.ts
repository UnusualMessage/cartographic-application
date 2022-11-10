export default interface User {
  id: string;
  login: string;
  password: string;
  accessToken: string;
}

export interface AuthenticateUser {
  login: string;
  password: string;
}

export interface AccessToken {
  token: string;
}
