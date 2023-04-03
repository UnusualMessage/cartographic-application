import { Entity } from "../base";
import { Organization } from "../organization";

export interface Speed extends Entity {
  title: string;
  organization: Organization;
  min: number;
  max: number;
  timeLimit: number;
}
