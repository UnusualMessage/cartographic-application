import { Entity } from "../base";
import { Organization } from "../organization";

export interface Department extends Entity {
  title: string;
  organization: Organization;
}
