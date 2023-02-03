import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import EntitiesTree from "../common/EntitiesTree";
import { Node } from "../../types/nodes";
import { planNodes } from "../../shared/assets/nodes";
import { Plan } from "../../types/entities";
import { PlansStore } from "../../stores/entities";
import { getPlansTreeClickHandler } from "../../shared/lib/utils/nodes";

const fillNodes = (plans?: Plan[]) => {
  const initial: Node[] = cloneDeep(planNodes);

  if (!plans) {
    return initial;
  }

  plans.forEach((plan) => {
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

const PlansTree = () => {
  const plans = PlansStore.plans;

  return (
    <>
      <Divider />
      <EntitiesTree<Plan>
        fillNodes={fillNodes}
        source={plans}
        className={wrapper}
        handleClick={getPlansTreeClickHandler()}
      />
    </>
  );
};

export default observer(PlansTree);
