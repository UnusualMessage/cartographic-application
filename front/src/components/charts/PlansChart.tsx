import { Plan } from "../../types/entities";
import { ResponsivePie } from "@nivo/pie";

import { chart, wrapper } from "./chart.module.scss";

interface Props {
  plans: Plan[];
}

const PlansChart = ({ plans }: Props) => {
  const data = plans.map((plan) => {
    return {
      id: `${plan.type}-${plan.year}`,
      value: plan.target,
      color: "hsl(81, 70%, 50%)",
    };
  });

  return (
    <div className={wrapper}>
      <div className={chart}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          startAngle={-180}
          enableArcLabels={false}
        />
      </div>
    </div>
  );
};

export default PlansChart;
