import { Equipment, TableEquipment } from "../../../../misc";

export const mapEquipmentToTable = (equipment: Equipment): TableEquipment => {
  return {
    id: equipment.id,
    key: equipment.id,
    name: equipment.name,
    status: equipment.status,
    type: equipment.type.name,
    organization: equipment.organization.title,
    department: equipment.department?.title,
  };
};
