import { CellRenderer } from "@blueprintjs/table";

export interface Column {
  renderer: CellRenderer;
  name: string;
}
