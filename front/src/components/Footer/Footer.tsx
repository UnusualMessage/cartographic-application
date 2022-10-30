import { Tab, Tabs } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import { active, collapse, panel, tabs, wrapper } from "./footer.module.scss";

import { TabsStore } from "../../stores";
import { Tab as TabType } from "../../types/Tab";
import { footerTabs } from "../../assets/tabs";
import TabPage from "./TabPage";
import { Resize, useResizing } from "../../hooks";

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

const Footer = () => {
  const { size, start, isResizing } = useResizing({
    initial: 240,
    type: Resize.height,
    limit: {
      top: 1080,
      bottom: 240,
    },
  });

  const currentTab = TabsStore.footerTabId;
  const currentTabList = TabsStore.tabsListId;

  let currentTabs = footerTabs.find((list) => list.id === currentTabList)?.tabs;

  if (!currentTabs) {
    currentTabs = footerTabs[0].tabs;
  }

  return (
    <>
      <div
        className={classNames({ [collapse]: true, [active]: isResizing })}
        onMouseDown={start}
      />

      <div className={wrapper} style={{ height: `${size}px` }}>
        <Tabs
          className={tabs}
          id="footer-tabs"
          selectedTabId={handleSelectedTab(currentTab, currentTabs)}
          onChange={(newTabId) => {
            TabsStore.footerTabId = newTabId;
          }}
        >
          {currentTabs.map(tabsRenderer)}
        </Tabs>
      </div>
    </>
  );
};

export default observer(Footer);
