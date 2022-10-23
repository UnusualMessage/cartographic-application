import { Divider, TreeEventHandler } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import EntitiesTree from "../../../EntitiesTree";
import { Node } from "../../../../types/Node";
import { planNodes } from "../../../../assets/nodes";
import { Plan } from "../../../../types/entities";
import { PlansStore } from "../../../../stores/entities";
import { TabsStore } from "../../../../stores";

const fillNodes = (plans: Plan[]) => {
  const initial: Node[] = cloneDeep(planNodes);

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

const handleClick: TreeEventHandler = (node) => {
  if (node.childNodes) {
    TabsStore.tabsListId = "footer-plans";
  } else {
    TabsStore.tabsListId = "footer-plan";
  }
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
        handleClick={handleClick}
      />
    </>
  );
};

export default observer(Plans);
