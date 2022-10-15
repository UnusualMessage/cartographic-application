import { Divider, Tree } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";

import { wrapper } from "./tree.module.scss";

import { Node } from "../../../../types/Node";
import { FeaturesStore } from "../../../../stores";
import { plans } from "../../../../assets/nodes";
import useTreeActions from "../../../../hooks/useTreeActions";

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

  const [nodes, setNodes] = useState(() => fillNodes(features));

  useEffect(() => {
    setNodes(fillNodes(features));
  }, [features]);

  const { handleNodeCollapse, handleNodeExpand } = useTreeActions({
    nodes,
    setNodes,
  });

  return (
    <>
      <Divider />
      <Tree
        className={wrapper}
        contents={nodes}
        onNodeCollapse={handleNodeCollapse}
        onNodeExpand={handleNodeExpand}
      />
    </>
  );
};

export default observer(Plans);
