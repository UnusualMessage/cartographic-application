import { TreeProps } from "antd/es/tree";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Tree, Loader } from "@shared/ui";
import { UserAside as Aside, Content } from "@widgets/index";

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

  return <Tree fillNodes={fillNodes} handleSelect={handleClick} />;
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
