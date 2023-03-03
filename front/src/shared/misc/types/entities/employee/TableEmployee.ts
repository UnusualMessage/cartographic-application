import { TableItem } from "../../table";

export interface TableEmployee extends TableItem {
  firstName: string;
  secondName?: string;
  patronymic?: string;
  phone?: string;
  birthDate?: string;
  driverCard?: string;
  post: string;
  organization: string;
}
