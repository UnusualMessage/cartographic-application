import { Divider, Tree } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";

import { wrapper } from "./tree.module.scss";

import { Node } from "../../../../types/Node";
import { getFeatureCenter } from "../../../../utils/features/getFeatureCenter";
import {
  FeaturesChangesStore,
  FeaturesStore,
  ViewStore,
} from "../../../../stores";
import { fields } from "../../../../assets/nodes";
import useTreeActions from "../../../../hooks/useTreeActions";

const fillNodes = (nodes: FeatureLike[]) => {
  const initial: Node[] = cloneDeep(fields);

  nodes.forEach((field) => {
    initial[0].childNodes?.push({
      id: field.getId() ?? "",
      label: field.getId()?.toString() ?? "",
      icon: "document",
      nodeData: field,
    });
  });

  return initial;
};

const Fields = () => {
  const features = FeaturesStore.features;
  const lastChange = FeaturesChangesStore.lastChange;

  const [nodes, setNodes] = useState(() => fillNodes(features));

  useEffect(() => {
    setNodes(fillNodes(features));
  }, [features, lastChange]);

  const { handleNodeCollapse, handleNodeExpand } = useTreeActions({
    nodes,
    setNodes,
  });

  const handleNodeClick = useCallback(
    (_node: Node) => {
      if (_node.nodeData) {
        ViewStore.centerTo(getFeatureCenter(_node.nodeData));
      }
    },
    [nodes]
  );

  return (
    <>
      <Divider />
      <Tree
        className={wrapper}
        contents={nodes}
        onNodeCollapse={handleNodeCollapse}
        onNodeExpand={handleNodeExpand}
        onNodeClick={handleNodeClick}
      />
    </>
  );
};

export default observer(Fields);
