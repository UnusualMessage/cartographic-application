import { EquipmentType, TableEquipmentType } from "../../../../misc";

export const mapEquipmentTypeToTable = (
  type: EquipmentType
): TableEquipmentType => {
  return {
    id: type.id,
    key: type.id,
    name: type.name,
    organization: type.organization.title,
    department: type.department?.title,
  };
};
