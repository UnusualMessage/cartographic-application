import { Equipment } from "./Equipment";
import { TableItem } from "../../table";

export interface TableEquipment
  extends TableItem,
    Omit<Equipment, "id" | "organization" | "department" | "type" | "feature"> {
  type: string;
  organization: string;
  department?: string;
}
