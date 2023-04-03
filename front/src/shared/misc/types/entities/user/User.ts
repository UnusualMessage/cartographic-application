import { RoleNumber } from "./Role";
import { Entity } from "../base";

export interface User extends Entity {
  login: string;
  fullName?: string;
  roles: RoleNumber;
}
