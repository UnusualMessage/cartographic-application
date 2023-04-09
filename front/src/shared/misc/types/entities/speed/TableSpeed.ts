import { Speed } from "./Speed";
import { TableItem } from "../../table";

export interface TableSpeed
  extends TableItem,
    Omit<Speed, "id" | "department" | "organization"> {
  organization: string;
  department?: string;
}
