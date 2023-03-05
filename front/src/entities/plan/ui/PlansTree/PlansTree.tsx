import { FileOutlined } from "@ant-design/icons";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { planNodes } from "@shared/assets";
import { getPlansTreeClickHandler } from "@shared/lib";
import type { Node, Plan } from "@shared/misc";
import { tree } from "@shared/styles";
import { EntitiesTree } from "@shared/ui";

import { PlansStore } from "../../model";

const fillNodes = (plans?: Plan[]) => {
  const initial: Node[] = cloneDeep(planNodes);

  if (!plans) {
    return initial;
  }

  plans.forEach((plan) => {
    const yearNode = initial[0].children?.find(
      (node) => node.data === plan.year
    );

    if (yearNode) {
      yearNode.children?.push({
        key: plan.id,
        title: plan.title,
        icon: <FileOutlined />,
        data: plan,
      });
    }
  });

  return initial;
};

const PlansTree = () => {
  const plans = PlansStore.plans;

  return (
    <EntitiesTree<Plan>
      fillNodes={fillNodes}
      source={plans}
      className={tree}
      handleSelect={getPlansTreeClickHandler()}
    />
  );
};

export default observer(PlansTree);
