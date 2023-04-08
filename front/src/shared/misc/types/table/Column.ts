import { FC } from "react";

export interface Column<T extends Record<string, any>> {
  title: string;
  dataIndex: string & keyof T;
  render?: FC;
}
