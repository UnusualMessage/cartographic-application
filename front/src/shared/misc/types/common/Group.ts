import { Node } from "../node";

export interface Group<T> {
  key: string;
  label: string;
  getNodes: (source?: T[]) => Node[];
}
