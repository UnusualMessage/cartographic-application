import { Organization } from "../organization";
import { Post } from "../post";

export interface Employee {
  id: string;
  firstName: string;
  secondName?: string;
  patronymic?: string;
  phone?: string;
  birthDate?: string;
  driverCard?: string;
  post: Post;
  organization: Organization;
}
