import { Divider } from "@blueprintjs/core";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { planNodes } from "../../shared/assets/templates/nodes";
import { getPlansTreeClickHandler } from "../../shared/lib/utils/nodes";
import { PlansStore } from "../../stores/entities";
import { Plan } from "../../types/entities";
import { Node } from "../../types/nodes";
import EntitiesTree from "../../components/common/EntitiesTree";
import { wrapper } from "./tree.module.scss";

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
