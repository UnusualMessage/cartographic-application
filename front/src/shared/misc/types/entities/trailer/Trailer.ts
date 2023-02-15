import { Department } from "../department";
import { Organization } from "../organization";

export interface Trailer {
  id: string;
  title: string;
  organization: Organization;
  department: Department;
}
