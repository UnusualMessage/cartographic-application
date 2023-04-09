import { TableItem } from "../../table";

export interface TableGeozone extends TableItem {
  title: string;
  organization: string;
  department?: string;
}
