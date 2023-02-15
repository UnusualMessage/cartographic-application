import { Organization } from "../organization";

export interface Partner {
  id: string;
  title: string;
  organization: Organization;
  address?: string;
  inn?: string;
  phone?: string;
}
