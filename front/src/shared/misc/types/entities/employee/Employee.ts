import { Entity } from "../base";
import { Department } from "../department";
import { Organization } from "../organization";
import { Post } from "../post";

export interface Employee extends Entity {
  firstName: string;
  secondName?: string;
  patronymic?: string;
  phone?: string;
  email?: string;
  birthDate?: string;
  driverCard?: string;
  post: Post;
  organization: Organization;
  department?: Department;
}
