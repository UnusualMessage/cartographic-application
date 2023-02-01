import { Tab, TabId, Tabs } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import TabPage from "../../../features/auxiliary/TabPage";
import { footerTabs } from "../../../shared/assets";
import { TabsStore } from "../../../entities/stores/ui";
import { Tab as TabType } from "../../../shared/api/types/tabs/Tab";
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
