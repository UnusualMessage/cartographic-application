import { Divider, TreeEventHandler } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import EntitiesTree from "../common/EntitiesTree";
import { Node } from "../../types/Node";
import { planNodes } from "../../assets/nodes";
import { Plan } from "../../types/entities";
import { PlansStore } from "../../stores/entities";
import { TabsStore } from "../../stores";

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

const handleClick: TreeEventHandler<any> = (node) => {
  const plansTabsListId = "footer-plans";
  const planTabsListId = "footer-plan";

  const switchTabsList = (id: string) => {
    if (TabsStore.tabsListId !== id) {
      TabsStore.tabsListId = id;
      TabsStore.footerTabId = "";
    }
  };

  if (node.childNodes) {
    switchTabsList(plansTabsListId);
    PlansStore.chosenYear = node.nodeData;
  } else {
    switchTabsList(planTabsListId);
    TabsStore.tabsListId = "footer-plan";
  }
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
        handleClick={handleClick}
      />
    </>
  );
};

export default observer(PlansTree);
