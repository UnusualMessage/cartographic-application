import { Node } from "../node";

export interface Group<T> {
  key: string;
  label: string;
  defaultSelected?: boolean;
  getNodes: (source?: T[]) => Node[];
}
