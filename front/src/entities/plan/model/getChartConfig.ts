import { PieConfig } from "@ant-design/plots";

import { Plan } from "@shared/misc";

export const getChartConfig = (plans: Plan[]) => {
  const data = plans.map((plan) => {
    return {
      title: `${plan.type}-${plan.year}`,
      value: plan.target,
    };
  });

  const config: PieConfig = {
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "title",
    radius: 0.8,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return config;
};
