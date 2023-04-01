import { TreeProps } from "antd/es/tree";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { isObjectKey } from "@shared/lib";
import { Group, Reference } from "@shared/misc";
import { Tree, Loader } from "@shared/ui";
import { ModeratorAside as Aside } from "@widgets/asides";
import { Content } from "@widgets/wrappers";

import { referenceNodes, references } from "./model";

const ReferencesTree = () => {
  const navigate = useNavigate();

  const onSelect: TreeProps["onSelect"] = (keys, info) => {
    const key = info.selectedNodes[0].key.toString();

    let reference: Reference | undefined;

    if (isObjectKey(key, references)) {
      reference = references[key];
    }

    if (reference) {
      navigate(reference.link);
    }
  };

  const groups: Group<Reference>[] = [
    {
      key: uuid(),
      label: "По порядку",
      getNodes: () => cloneDeep(referenceNodes),
    },
  ];

  return <Tree groups={groups} onSelect={onSelect} defaultSelected={""} />;
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
