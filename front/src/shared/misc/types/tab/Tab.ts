import { TabId } from "@blueprintjs/core";

export interface Tab {
  id: TabId;
  title: string;
  component: JSX.Element;
}
