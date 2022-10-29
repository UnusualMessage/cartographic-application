import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import { Node } from "../../types/Node";
import { FeaturesStore } from "../../stores";
import { fieldNodes } from "../../assets/nodes";
import EntitiesTree from "../common/EntitiesTree";

const fillNodes = (nodes: FeatureLike[]) => {
  const initial: Node[] = cloneDeep(fieldNodes);

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

const FieldsTree = () => {
  const features = FeaturesStore.features;

  return (
    <>
      <Divider />
      <EntitiesTree<FeatureLike>
        fillNodes={fillNodes}
        source={features}
        className={wrapper}
      />
    </>
  );
};

export default observer(FieldsTree);
