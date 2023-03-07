import { Pie } from "@ant-design/plots";

import type { Plan } from "@shared/misc";
import { chart, main } from "@shared/styles";

interface Props {
  plans: Plan[];
}

const PlansChart = ({ plans }: Props) => {
  const data = plans.map((plan) => {
    return {
      title: `${plan.type}-${plan.year}`,
      value: plan.target,
    };
  });

  const config = {
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

  return (
    <div className={chart}>
      <div className={main}>
        <Pie {...config} />
      </div>
    </div>
  );
};

export default PlansChart;
