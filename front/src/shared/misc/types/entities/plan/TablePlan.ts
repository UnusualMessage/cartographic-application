import { TableItem } from "../../table";

export interface TablePlan extends TableItem {
  title: string;
  type: string;
  target: number;
  year: number;
}
