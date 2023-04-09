import { RoleNumber } from "./Role";
import { Entity } from "../base";
import { Organization } from "../organization";

export interface User extends Entity {
  login: string;
  fullName?: string;
  organization: Organization;
  roles: RoleNumber;
}
