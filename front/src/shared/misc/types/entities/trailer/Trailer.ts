import { Entity } from "../base";
import { Department } from "../department";
import { Organization } from "../organization";

export interface Trailer extends Entity {
  title: string;
  organization: Organization;
  department: Department;
}
