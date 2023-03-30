import { Pie } from "@ant-design/plots";
import { observer } from "mobx-react-lite";

import { Chart } from "@shared/ui";

import { wrapper, inner } from "./chart.module.scss";
import { getPlansChartConfig, PlansStore } from "../../model";

const PlansChart = () => {
  const currentYear = PlansStore.chosenYear;
  let plans = PlansStore.plans;

  if (currentYear) {
    plans = plans.filter((plan) => plan.year === currentYear);
  }

  const config = getPlansChartConfig(plans);

  return (
    <Chart outerClass={wrapper} innerClass={inner}>
      <Pie {...config} />
    </Chart>
  );
};

export default observer(PlansChart);
