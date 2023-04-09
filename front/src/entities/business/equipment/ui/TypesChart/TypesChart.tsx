import { Pie } from "@ant-design/plots";
import { observer } from "mobx-react-lite";

import { EquipmentType } from "@shared/misc";
import { Chart } from "@shared/ui";

import { wrapper, inner } from "./chart.module.scss";
import { EquipmentStore, getTypesChartConfig } from "../../model";

interface Props {
  type: EquipmentType;
}

const TypesChart = ({ type }: Props) => {
  const equipment = EquipmentStore.equipment.filter(
    (item) => item.type.id === type.id
  );

  if (equipment.length < 1) {
    return <></>;
  }

  const config = getTypesChartConfig(equipment);

  return (
    <Chart outerClass={wrapper} innerClass={inner} title={type.name}>
      <Pie {...config} />
    </Chart>
  );
};

export default observer(TypesChart);
