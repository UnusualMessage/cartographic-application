import { Tab, TabId, Tabs } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { TabsStore } from "@shared/misc";
import { Tab as TabType } from "@shared/misc/types/tabs/Tab";
import { footerTabs } from "@shared/assets";
import TabPage from "@shared/ui/TabPage";

import { panel, wrapper } from "./information.module.scss";

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

const handleSelectedTab = (list: TabType[], current?: TabId) => {
  return current ?? list[0].id;
};

const switchTab = (newTab: TabId) => {
  TabsStore.footerTabId = newTab;
};

const Information = () => {
  const tabId = TabsStore.footerTabId;
  const tabListId = TabsStore.footerTabsListId;

  let currentTabs = footerTabs.find((list) => list.id === tabListId)?.tabs;

  if (!currentTabs) {
    currentTabs = footerTabs[0].tabs;
  }

  return (
    <Tabs
      className={wrapper}
      id="footer-tabs"
      selectedTabId={handleSelectedTab(currentTabs, tabId)}
      onChange={switchTab}
    >
      {currentTabs.map(tabsRenderer)}
    </Tabs>
  );
};

export default observer(Information);
