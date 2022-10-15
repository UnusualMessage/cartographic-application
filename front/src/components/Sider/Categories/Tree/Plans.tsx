import { Divider, Tree } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";

import { wrapper } from "./tree.module.scss";

import { Node, NodePath } from "../../../../types/Node";
import { forNode } from "../../../../utils/forNode";
import { getFeatureCenter } from "../../../../utils/getFeatureCenter";
import {
  FeaturesChangesStore,
  FeaturesStore,
  ViewStore,
} from "../../../../stores";
import { plans } from "../../../../assets/nodes";

const fillNodes = (nodes: FeatureLike[]) => {
  const initial: Node[] = cloneDeep(plans);

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

const Plans = () => {
  const features = FeaturesStore.features;
  const lastChange = FeaturesChangesStore.lastChange;

  const [nodes, setNodes] = useState(() => fillNodes(features));

  useEffect(() => {
    setNodes(fillNodes(features));
  }, [features, lastChange]);

  const handleNodeCollapse = useCallback(
    (_node: Node, nodePath: NodePath) => {
      const newNodes = forNode(nodePath, nodes, (node) => {
        node.isExpanded = false;
      });

      if (newNodes) {
        setNodes(newNodes);
      }
    },
    [nodes]
  );

  const handleNodeExpand = useCallback(
    (_node: Node, nodePath: NodePath) => {
      const newNodes = forNode(nodePath, nodes, (node) => {
        node.isExpanded = true;
      });

      if (newNodes) {
        setNodes(newNodes);
      }
    },
    [nodes]
  );

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

export default observer(Plans);
