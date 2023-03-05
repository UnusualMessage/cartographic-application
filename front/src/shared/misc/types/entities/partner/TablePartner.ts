import { TableItem } from "../../table";

export interface TablePartner extends TableItem {
  title: string;
  organization: string;
  address?: string;
  inn?: string;
  phone?: string;
}
