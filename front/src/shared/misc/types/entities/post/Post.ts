import { Organization } from "../organization";

export interface Post {
  id: string;
  title: string;
  organization: Organization;
}
