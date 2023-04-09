import { Trailer } from "./Trailer";
import { TableItem } from "../../table";

export interface TableTrailer
  extends TableItem,
    Omit<Trailer, "id" | "organization" | "department"> {
  organization: string;
  department?: string;
}
