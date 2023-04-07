import { Equipment, TableEquipment, Status } from "../../../../misc";
import { translateStatus } from "../../format";

export const mapEquipmentToTable = (equipment: Equipment): TableEquipment => {
  return {
    id: equipment.id,
    key: equipment.id,
    name: equipment.name,
    status: translateStatus(equipment.status) as Status,
    type: equipment.type.name,
    organization: equipment.organization.title,
    department: equipment.department?.title,
  };
};
