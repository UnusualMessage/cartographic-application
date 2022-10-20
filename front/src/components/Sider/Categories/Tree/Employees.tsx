import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import { Node } from "../../../../types/Node";
import { FeaturesStore } from "../../../../stores";
import { employees } from "../../../../assets/nodes";
import EntitiesTree from "../../../EntitiesTree";

const fillNodes = (nodes: FeatureLike[]) => {
  const initial: Node[] = cloneDeep(employees);

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

const Employees = () => {
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

export default observer(Employees);
