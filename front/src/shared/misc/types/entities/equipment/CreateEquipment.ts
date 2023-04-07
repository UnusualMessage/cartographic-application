import { Equipment } from "./Equipment";
import { Status } from "./Status";

export interface CreateEquipment
  extends Omit<
    Equipment,
    "id" | "type" | "organization" | "department" | "status"
  > {
  status?: Status;
  typeId: string;
  organizationId: string;
  departmentId?: string;
}
