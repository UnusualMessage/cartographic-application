import { Partner, TablePartner } from "../../../../misc";

export const mapPartnerToTable = (partner: Partner): TablePartner => {
  return {
    id: partner.id,
    key: partner.id,
    title: partner.title,
    organization: partner.organization.title,
    phone: partner.phone,
    address: partner.address,
    inn: partner.inn,
  };
};
