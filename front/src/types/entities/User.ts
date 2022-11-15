import { RoleNumber } from "../api";

export default interface User {
  id: string;
  login: string;
  roles: RoleNumber;
}

export interface AuthenticateUser {
  login: string;
  password: string;
}

export interface AccessToken {
  token: string;
}
