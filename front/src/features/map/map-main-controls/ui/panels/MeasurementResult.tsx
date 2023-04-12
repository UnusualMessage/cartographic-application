import { Typography } from "antd";
import { observer } from "mobx-react-lite";

import {
  MeasurementStore,
  InteractionsStore,
  Interactions,
} from "@shared/misc";
import { Panel } from "entities/map";

const { Text } = Typography;

const MeasurementResult = () => {
  const drawType = InteractionsStore.type;
  let text;

  switch (drawType) {
    case Interactions.area:
      text = <Text strong>{`Площадь: ${MeasurementStore.area}`}</Text>;
      break;
    case Interactions.coordinate:
      text = <Text strong>{MeasurementStore.coordinate}</Text>;
      break;
    case Interactions.length:
      text = <Text strong>{`Расстояние: ${MeasurementStore.distance}`}</Text>;
      break;
    default:
      text = <Text strong>{"Выберите действие."}</Text>;
  }

  return <Panel>{text}</Panel>;
};

export default observer(MeasurementResult);
