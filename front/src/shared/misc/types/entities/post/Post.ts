import { Entity } from "../base";
import { Organization } from "../organization";

export interface Post extends Entity {
  title: string;
  organization: Organization;
}
