import { Tab, Tabs } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { panel, wrapper } from "./information.module.scss";

import { TabsStore } from "../../../../stores/ui";
import { footerTabs } from "../../../../assets/tabs";
import { Tab as TabType } from "../../../../types/tabs/Tab";
import TabPage from "../../../auxiliary/TabPage";

const tabsRenderer = (tab: TabType) => {
  return (
    <Tab
      id={tab.id}
      key={`table-tab-${tab.id}`}
      title={tab.title}
      panel={<TabPage>{tab.component}</TabPage>}
      panelClassName={panel}
    />
  );
};

const handleSelectedTab = (current: string | number, list: TabType[]) => {
  if (current === "") {
    return list[0].id;
  } else {
    return current;
  }
};

const Information = () => {
  const currentTab = TabsStore.footerTabId;
  const currentTabList = TabsStore.tabsListId;

  let currentTabs = footerTabs.find((list) => list.id === currentTabList)?.tabs;

  if (!currentTabs) {
    currentTabs = footerTabs[0].tabs;
  }

  return (
    <Tabs
      className={wrapper}
      id="footer-tabs"
      selectedTabId={handleSelectedTab(currentTab, currentTabs)}
      onChange={(newTabId) => {
        TabsStore.footerTabId = newTabId;
      }}
    >
      {currentTabs.map(tabsRenderer)}
    </Tabs>
  );
};

export default observer(Information);
