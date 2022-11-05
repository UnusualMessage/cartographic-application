import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import { Node } from "../../types/Node";
import { fieldNodes } from "../../assets/nodes";
import EntitiesTree from "../common/EntitiesTree";
import { GeozonesStore } from "../../stores/entities";

const fillNodes = (nodes?: FeatureLike[]) => {
  const initial: Node[] = cloneDeep(fieldNodes);

  if (!nodes) {
    return initial;
  }

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

const GeozonesTree = () => {
  const zones = GeozonesStore.geozones;

  return (
    <>
      <Divider />
      <EntitiesTree<FeatureLike>
        fillNodes={fillNodes}
        source={zones}
        className={wrapper}
      />
    </>
  );
};

export default observer(GeozonesTree);
