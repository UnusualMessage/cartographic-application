import { Tree, TreeNodeInfo } from "@blueprintjs/core";
import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";

import { wrapper } from "./sider.module.scss";
import FeaturesStore from "../../stores/FeaturesStore";
import { forNode } from "../../utils/forNode";
import { Node } from "../../types/Node";

type NodePath = number[];

const fillNodes = (fields: FeatureLike[]) => {
  const initial: Node[] = [
    {
      id: "fields",
      icon: "folder-close",
      label: "Поля",
      isExpanded: false,
      childNodes: [],
    },
  ];

  fields.forEach((field) => {
    initial[0].childNodes?.push({
      id: field.getId() ?? "",
      label: field.getId()?.toString() ?? "",
      icon: "document",
    });
  });

  return initial;
};

const Sider = () => {
  const features = FeaturesStore.features;
  const [nodes, setNodes] = useState(() => fillNodes(features));

  useEffect(() => {
    setNodes(fillNodes(features));
  }, [features]);

  const handleNodeCollapse = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
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
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      const newNodes = forNode(nodePath, nodes, (node) => {
        node.isExpanded = true;
      });

      if (newNodes) {
        setNodes(newNodes);
      }
    },
    [nodes]
  );

  return (
    <Tree
      className={wrapper}
      contents={nodes}
      onNodeCollapse={handleNodeCollapse}
      onNodeExpand={handleNodeExpand}
    />
  );
};

export default observer(Sider);
