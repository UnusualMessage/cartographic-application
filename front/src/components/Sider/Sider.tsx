import { Tree } from "@blueprintjs/core";
import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { cloneDeep } from "lodash";

import { wrapper } from "./sider.module.scss";

import FeaturesStore from "../../stores/FeaturesStore";
import { forNode } from "../../utils/forNode";
import { Node, NodePath } from "../../types/Node";
import { getFeatureCenter } from "../../utils/getFeatureCenter";
import ViewStore from "../../stores/ViewStore";
import { emptyNodes } from "../../assets/emptyNodes";
import { FeaturesChangesStore } from "../../stores/changes";

const fillNodes = (fields: FeatureLike[]) => {
  const initial: Node[] = cloneDeep(emptyNodes);

  fields.forEach((field) => {
    initial[0].childNodes?.push({
      id: field.getId() ?? "",
      label: field.getId()?.toString() ?? "",
      icon: "document",
      nodeData: field,
    });
  });

  return initial;
};

const Sider = () => {
  const features = FeaturesStore.features;
  const lastChange = FeaturesChangesStore.lastChange;

  const [nodes, setNodes] = useState(() => fillNodes(features));

  useEffect(() => {
    setNodes(fillNodes(features));
  }, [lastChange]);

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
        ViewStore.translateTo(getFeatureCenter(_node.nodeData));
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
      onNodeClick={handleNodeClick}
    />
  );
};

export default observer(Sider);
