import { Tab, Tabs } from "@blueprintjs/core";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

import { fullSize, panel, wrapper } from "./categories.module.scss";

import { siderTabs } from "../../../../assets/tabs";
import { TabsStore } from "../../../../stores/ui";

interface Props {
  fill?: boolean;
}

const Categories = ({ fill }: Props) => {
  const [currentTab, setCurrentTab] = useState<string | number>("sider-fields");
  const currentTabs = useMemo(() => {
    return siderTabs.tabs;
  }, []);

  const classes = classNames({
    [wrapper]: true,
    [fullSize]: fill,
  });

  return (
    <Tabs
      id="sider-tabs"
      className={classes}
      selectedTabId={currentTab}
      renderActiveTabPanelOnly
      onChange={(newTabId) => {
        switch (newTabId) {
          case "sider-fields":
            TabsStore.tabsListId = "footer-fields";
            break;

          case "sider-equipment":
            TabsStore.tabsListId = "footer-equipment";
            break;

          case "sider-employees":
            TabsStore.tabsListId = "footer-employees";
            break;

          case "sider-plans":
            TabsStore.tabsListId = "footer-plans";
            break;
        }
        TabsStore.active = true;
        TabsStore.footerTabId = "";
        setCurrentTab(newTabId);
      }}
    >
      {currentTabs.map((tab) => {
        return (
          <Tab
            id={tab.id}
            key={`sider-${tab.id}`}
            title={tab.title}
            panel={tab.component}
            panelClassName={panel}
          />
        );
      })}
    </Tabs>
  );
};

export default observer(Categories);
