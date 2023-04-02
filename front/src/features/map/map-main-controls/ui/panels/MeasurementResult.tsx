import { Typography } from "antd";
import { observer } from "mobx-react-lite";

import { Panel } from "@entities/map-misc";
import { MeasurementStore, InteractionsStore } from "@shared/misc";

const { Text } = Typography;

const MeasurementResult = () => {
  const drawType = InteractionsStore.type;
  let text;

  switch (drawType) {
    case "measure-area":
      text = <Text strong>{`Площадь: ${MeasurementStore.area}`}</Text>;
      break;
    case "measure-coordinate":
      text = <Text strong>{MeasurementStore.coordinate}</Text>;
      break;
    case "measure-length":
      text = <Text strong>{`Расстояние: ${MeasurementStore.distance}`}</Text>;
      break;
    default:
      text = <Text strong>{"Выберите действие."}</Text>;
  }

  return <Panel>{text}</Panel>;
};

export default observer(MeasurementResult);
