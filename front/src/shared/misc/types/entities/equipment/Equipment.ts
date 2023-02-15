import { EquipmentType } from "./EquipmentType";
import { Status } from "./Status";

export interface Equipment {
  id: string;
  name: string;
  status: Status;
  type: EquipmentType;
}
