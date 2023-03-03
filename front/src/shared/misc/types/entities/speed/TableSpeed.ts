import { TableItem } from "../../table";

export interface TableSpeed extends TableItem {
  title: string;
  organization: string;
  min: number;
  max: number;
  timeLimit: number;
}
