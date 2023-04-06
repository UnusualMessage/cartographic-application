import { EquipmentType, UpdateEquipmentType } from "@shared/misc";

export const getDefaultValues = (
  type?: EquipmentType
): Partial<UpdateEquipmentType> => {
  return {
    id: type?.id,
    name: type?.name,
    organizationId: type?.organization.id,
    departmentId: type?.department?.id,
  };
};
