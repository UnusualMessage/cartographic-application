import { Tab, Tabs } from "@blueprintjs/core";
import classNames from "classnames";
import { useMemo, useState } from "react";

import { fullSize, panel, wrapper } from "./categories.module.scss";

import { siderTabs } from "../../../assets/siderTabs";

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
      onChange={(newTabId) => {
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

export default Categories;
