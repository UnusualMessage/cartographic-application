import EquipmentType from "./EquipmentType";

export default interface Equipment {
  id: string;
  name: string;
  status: Status;
  type: EquipmentType;
}

export interface CreateEquipment extends Omit<Equipment, "id" | "type"> {
  typeId: string;
}

export interface UpdateEquipment extends CreateEquipment {
  id: string;
}

export type Status = "waiting" | "working" | "parking" | "no-data" | "disabled";
