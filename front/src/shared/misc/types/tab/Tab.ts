import { TabId, IconName, MaybeElement } from "@blueprintjs/core";

export interface Tab {
  id: TabId;
  title: string;
  icon?: IconName | MaybeElement;
  component: JSX.Element;
}
