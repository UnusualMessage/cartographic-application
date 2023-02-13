import { Divider } from "@blueprintjs/core";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { PlansStore } from "@entities/plan/model";
import { Node, Plan } from "@shared/misc";
import { planNodes } from "@shared/assets/templates/nodes";
import { getPlansTreeClickHandler } from "@shared/lib";
import { tree } from "@shared/styles";
import { EntitiesTree } from "@shared/ui";

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
        className={tree}
        handleClick={getPlansTreeClickHandler()}
      />
    </>
  );
};

export default observer(PlansTree);
