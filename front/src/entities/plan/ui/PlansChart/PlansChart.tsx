import { Pie } from "@ant-design/plots";

import type { Plan } from "@shared/misc";
import { Chart } from "@shared/ui";

import { wrapper, inner } from "./chart.module.scss";
import { getPlansChartConfig } from "../../model";

interface Props {
  plans: Plan[];
}

const PlansChart = ({ plans }: Props) => {
  const config = getPlansChartConfig(plans);

  return (
    <Chart outerClass={wrapper} innerClass={inner}>
      <Pie {...config} />
    </Chart>
  );
};

export default PlansChart;
