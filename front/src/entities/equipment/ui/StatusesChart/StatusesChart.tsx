import { Bar } from "@ant-design/plots";
import { observer } from "mobx-react-lite";

import { Chart } from "@shared/ui";

import { wrapper, inner } from "./chart.module.scss";
import { EquipmentStore, getStatusesChartConfig } from "../../model";

const StatusesChart = () => {
  const equipment = EquipmentStore.equipment;
  const config = getStatusesChartConfig(equipment);

  return (
    <Chart outerClass={wrapper} innerClass={inner}>
      <Bar height={200} {...config} />
    </Chart>
  );
};

export default observer(StatusesChart);
