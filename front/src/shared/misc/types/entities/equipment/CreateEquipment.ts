import { Equipment } from "./Equipment";

export interface CreateEquipment extends Omit<Equipment, "id" | "type"> {
  typeId: string;
}
