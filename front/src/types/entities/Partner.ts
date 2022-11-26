import Organization from "./Organization";

export default interface Partner {
  id: string;
  title: string;
  number?: string;
  organization: Organization;
  address?: string;
  inn?: string;
  phone?: string;
}

export interface CreatePartner {
  title: string;
  number?: string;
  organizationId: string;
  address?: string;
  inn?: string;
  phone?: string;
}

export interface UpdatePartner extends CreatePartner {
  id: string;
}
