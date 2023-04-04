import { Equipment } from "./Equipment";

export interface CreateEquipment
  extends Omit<Equipment, "id" | "type" | "organization" | "department"> {
  typeId: string;
  organizationId: string;
  departmentId?: string;
}
