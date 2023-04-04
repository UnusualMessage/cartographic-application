import { Employee } from "./Employee";
import { TableItem } from "../../table";

export interface TableEmployee
  extends TableItem,
    Omit<Employee, "id" | "post" | "organization" | "department"> {
  post: string;
  organization: string;
  department?: string;
}
