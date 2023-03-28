import { FileOutlined } from "@ant-design/icons";
import { cloneDeep } from "lodash";

import { planNodes } from "@shared/assets";
import { Plan, Node } from "@shared/misc";

export const getNodes = (plans?: Plan[]) => {
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
