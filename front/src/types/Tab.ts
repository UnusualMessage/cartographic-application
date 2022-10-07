import { TabId } from "@blueprintjs/core";

export interface Tab {
  id: TabId;
  title: string;
  component: JSX.Element;
}

export interface TabsList {
  id: string;
  tabs: Tab[];
}
