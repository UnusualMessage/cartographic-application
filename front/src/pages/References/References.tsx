import { TreeProps } from "antd/es/tree";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

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

  return (
    <Tree fillNodes={fillNodes} onSelect={handleClick} defaultSelected={""} />
  );
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
