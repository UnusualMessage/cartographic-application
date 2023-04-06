import { Mounted } from "./Mounted";
import { TableItem } from "../../table";

export interface TableMounted
  extends TableItem,
    Omit<Mounted, "id" | "organization" | "department"> {
  organization: string;
  department?: string;
}
