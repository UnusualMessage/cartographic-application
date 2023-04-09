import { Department } from "./Department";
import { TableItem } from "../../table";

export interface TableDepartment
  extends TableItem,
    Omit<Department, "id" | "organization"> {
  organization: string;
}
