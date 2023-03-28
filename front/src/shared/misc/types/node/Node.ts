import { ReactNode } from "react";

export interface Node {
  title: ReactNode;
  key: string;
  icon: ReactNode;
  data?: any;
  children?: Node[];
  isExpanded?: boolean;
  isLeaf?: boolean;
  visible?: boolean;
  disabled?: boolean;
}
