import { EquipmentType } from "./EquipmentType";
import { TableItem } from "../../table";

export interface TableEquipmentType
  extends TableItem,
    Omit<EquipmentType, "id" | "organization" | "department"> {
  organization: string;
  department?: string;
}
