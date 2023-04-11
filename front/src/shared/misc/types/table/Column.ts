import { FC } from "react";

interface Sorter<T> {
  compare: (a: T, b: T) => number;
}

export interface Column<T extends Record<string, any>> {
  title: string;
  dataIndex: string & keyof T;
  render?: FC;
  sorter?: Sorter<T>;
  showSorterTooltip?: boolean;
}
