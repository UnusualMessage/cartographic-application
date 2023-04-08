import { Entity } from "../base";
import { Department } from "../department";
import { Organization } from "../organization";

export interface Speed extends Entity {
  title: string;
  min: number;
  max: number;
  timeLimit: number;
  organization: Organization;
  department?: Department;
}
