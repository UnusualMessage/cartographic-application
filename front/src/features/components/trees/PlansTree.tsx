import { Divider } from "@blueprintjs/core";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { Node } from "@shared/api/types/nodes";
import { planNodes } from "@shared/assets";
import { getPlansTreeClickHandler } from "@shared/lib";

import { wrapper } from "./tree.module.scss";
import { PlansStore } from "../../../entities/stores/entities";
import { Plan } from "../../../shared/api/types/entities";
import EntitiesTree from "../../../shared/ui/EntitiesTree";

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
