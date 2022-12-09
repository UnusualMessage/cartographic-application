import Organization from "./Organization";

export default interface Partner {
  id: string;
  title: string;
  organization: Organization;
  address?: string;
  inn?: string;
  phone?: string;
}

export interface CreatePartner {
  title: string;
  organizationId: string;
  address?: string;
  inn?: string;
  phone?: string;
}

export interface UpdatePartner extends CreatePartner {
  id: string;
}
