import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import { Node } from "../../../../types/Node";
import { plans } from "../../../../assets/nodes";
import EntitiesTree from "../../../EntitiesTree";
import Plan from "../../../../types/entities/Plan";
import PlansStore from "../../../../stores/PlansStore";

const fillNodes = (nodes: Plan[]) => {
  const initial: Node[] = cloneDeep(plans);

  nodes.forEach((plan) => {
    const yearNode = initial[0].childNodes?.find(
      (node) => node.nodeData === plan.year
    );

    if (yearNode) {
      yearNode.childNodes?.push({
        id: plan.id,
        label: plan.title,
        icon: "document",
        nodeData: plan,
      });
    }
  });

  return initial;
};

const Plans = () => {
  const plans = PlansStore.plans;

  return (
    <>
      <Divider />
      <EntitiesTree<Plan>
        fillNodes={fillNodes}
        source={plans}
        className={wrapper}
      />
    </>
  );
};

export default observer(Plans);
