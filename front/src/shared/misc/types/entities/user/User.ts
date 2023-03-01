import { RoleNumber } from "../../api";

export interface User {
  id: string;
  login: string;
  fullName?: string;
  roles: RoleNumber;
}
