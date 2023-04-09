import { Post } from "./Post";
import { TableItem } from "../../table";

export interface TablePost
  extends TableItem,
    Omit<Post, "id" | "organization" | "department"> {
  organization: string;
  department?: string;
}
