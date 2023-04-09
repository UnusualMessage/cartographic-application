import { EquipmentType } from "./EquipmentType";

export interface CreateEquipmentType
  extends Omit<EquipmentType, "id" | "organization" | "department"> {
  organizationId: string;
  departmentId?: string;
}
