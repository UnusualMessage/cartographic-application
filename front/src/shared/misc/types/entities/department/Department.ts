import { Organization } from "../organization";

export interface Department {
  id: string;
  title: string;
  organization: Organization;
}
