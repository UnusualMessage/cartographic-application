import { Entity } from "../base";
import { Organization } from "../organization";
import { Post } from "../post";

export interface Employee extends Entity {
  firstName: string;
  secondName?: string;
  patronymic?: string;
  phone?: string;
  birthDate?: string;
  driverCard?: string;
  post: Post;
  organization: Organization;
}
