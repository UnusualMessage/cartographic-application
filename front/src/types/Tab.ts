import { TabId } from "@blueprintjs/core";

export default interface Tab {
  id: TabId;
  title: string;
  component: JSX.Element;
}
