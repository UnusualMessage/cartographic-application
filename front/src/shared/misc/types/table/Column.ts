import { FC } from "react";

export interface Column {
  title: string;
  dataIndex: string;
  render?: FC;
}
