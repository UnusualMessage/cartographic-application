import { Text } from "@blueprintjs/core";
import { ResponsivePie } from "@nivo/pie";

import { Equipment, EquipmentType } from "../../shared/api/types/entities";
import { chart, title as cssTitle, wrapper } from "./chart.module.scss";

interface Props {
  equip: Equipment[];
  type: EquipmentType;
  title: string;
}

const StatusByTypeChart = ({ equip, type, title }: Props) => {
  equip = equip.filter((item) => item.type.id === type.id);

  const waiting = equip.filter((item) => item.status === "waiting");
  const parking = equip.filter((item) => item.status === "parking");
  const nd = equip.filter((item) => item.status === "no-data");
  const disabled = equip.filter((item) => item.status === "disabled");
  const working = equip.filter((item) => item.status === "working");

  const data = [
    {
      id: `Простой - ${waiting.length}`,
      value: waiting.length,
      color: "hsl(81, 70%, 50%)",
    },

    {
      id: `Парковка - ${parking.length}`,
      value: parking.length,
      color: "hsl(81, 70%, 50%)",
    },

    {
      id: `Нет связи - ${nd.length}`,
      value: nd.length,
      color: "hsl(81, 70%, 50%)",
    },

    {
      id: `Отключено - ${disabled.length}`,
      value: disabled.length,
      color: "hsl(81, 70%, 50%)",
    },

    {
      id: `Работает - ${working.length}`,
      value: working.length,
      color: "hsl(81, 70%, 50%)",
    },
  ];

  return (
    <div className={wrapper}>
      <div className={chart}>
        <Text className={cssTitle}>{title}</Text>
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

export default StatusByTypeChart;
