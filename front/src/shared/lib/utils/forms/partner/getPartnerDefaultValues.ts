import { Partner, UpdatePartner } from "../../../../misc";

export const getPartnerDefaultValues = (
  partner?: Partner
): Partial<UpdatePartner> => {
  return {
    id: partner?.id,
    title: partner?.title,
    phone: partner?.phone,
    address: partner?.address,
    inn: partner?.inn,
    organizationId: partner?.organization.id,
  };
};
