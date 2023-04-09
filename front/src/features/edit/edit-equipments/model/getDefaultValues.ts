import { AuthStore } from "@entities/auth";
import { Equipment, UpdateEquipment } from "@shared/misc";

export const getDefaultValues = (
  equipment?: Equipment
): Partial<UpdateEquipment> => {
  const currentOrganization = AuthStore.user?.organization;

  return {
    id: equipment?.id,
    name: equipment?.name,
    typeId: equipment?.type.id,
    organizationId: currentOrganization?.id,
    departmentId: equipment?.department?.id,
  };
};
