import { AuthStore } from "@entities/auth";
import { EquipmentType, UpdateEquipmentType } from "@shared/misc";

export const getDefaultValues = (
  type?: EquipmentType
): Partial<UpdateEquipmentType> => {
  const currentOrganization = AuthStore.user?.organization;

  return {
    id: type?.id,
    name: type?.name,
    organizationId: currentOrganization?.id,
    departmentId: type?.department?.id,
  };
};
