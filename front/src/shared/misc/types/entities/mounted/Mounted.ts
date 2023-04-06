import { Entity } from "../base";
import { Department } from "../department";
import { Organization } from "../organization";

export interface Mounted extends Entity {
  name: string;
  width: string;
  offset?: string;
  organization: Organization;
  department?: Department;
}
