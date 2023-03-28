import { TreeProps } from "antd/es/tree";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { Group, Reference } from "@shared/misc";
import { Tree, Loader } from "@shared/ui";
import { ModeratorAside as Aside } from "@widgets/asides";
import { Content } from "@widgets/wrappers";

import { referenceNodes, references } from "./model";

const fillNodes = () => {
  return cloneDeep(referenceNodes);
};

const ReferencesTree = () => {
  const navigate = useNavigate();

  const handleClick: TreeProps["onSelect"] = (keys, info) => {
    const reference = references.find(
      (reference) => info.selectedNodes[0].key === reference.id
    );

    if (reference) {
      navigate(reference.link);
    }
  };

  const groups: Group<Reference>[] = [
    {
      key: uuid(),
      label: "По порядку",
      getNodes: fillNodes,
    },
  ];

  return <Tree groups={groups} onSelect={handleClick} defaultSelected={""} />;
};

const References = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Aside>
        <ReferencesTree />
      </Aside>
      <Content>
        <Outlet />
      </Content>
    </React.Suspense>
  );
};

export default observer(References);
