import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import { Node } from "../../types/nodes";
import { fieldNodes } from "../../assets/nodes";
import EntitiesTree from "../common/EntitiesTree";
import { GeozonesStore } from "../../stores/entities";
import { Geozone } from "../../types/entities";
import { getGeozonesTreeClickHandler } from "../../utils/nodes";

const fillNodes = (nodes?: Geozone[]) => {
  const initial: Node[] = cloneDeep(fieldNodes);

  if (!nodes) {
    return initial;
  }

  nodes.forEach((field) => {
    initial[0].childNodes?.push({
      id: field.id,
      label: field.title,
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
      <EntitiesTree<Geozone>
        fillNodes={fillNodes}
        source={zones}
        handleClick={getGeozonesTreeClickHandler()}
        className={wrapper}
      />
    </>
  );
};

export default observer(GeozonesTree);
