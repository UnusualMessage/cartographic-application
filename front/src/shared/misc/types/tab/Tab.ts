import { ReactNode } from "react";

export interface Tab {
  key: string;
  label: ReactNode;
  children: ReactNode;
}
