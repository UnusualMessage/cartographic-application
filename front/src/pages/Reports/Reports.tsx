import { TreeProps } from "antd/es/tree";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { isObjectKey } from "@shared/lib";
import { Group, Reference } from "@shared/misc";
import { Tree, Loader } from "@shared/ui";
import { MonitoringAside as Aside } from "@widgets/asides";
import { Content } from "@widgets/wrappers";

import { reportsNodes, reports } from "./model";

const ReportsTree = () => {
  const navigate = useNavigate();

  const onSelect: TreeProps["onSelect"] = (keys, info) => {
    const key = info.selectedNodes[0].key.toString();

    let reference: Reference | undefined;

    if (isObjectKey(key, reports)) {
      reference = reports[key];
    }

    if (reference) {
      navigate(reference.link);
    }
  };

  const groups: Group<Reference>[] = [
    {
      key: uuid(),
      label: "По порядку",
      getNodes: () => cloneDeep(reportsNodes),
    },
  ];

  return <Tree groups={groups} onSelect={onSelect} defaultSelected={""} />;
};

const Reports = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Aside>
        <ReportsTree />
      </Aside>
      <Content>
        <Outlet />
      </Content>
    </React.Suspense>
  );
};

export default observer(Reports);
