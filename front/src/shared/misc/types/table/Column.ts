import { FC } from "react";

export interface Column<T extends Record<string, any>> {
  title: string;
  dataIndex: keyof T;
  render?: FC;
}
