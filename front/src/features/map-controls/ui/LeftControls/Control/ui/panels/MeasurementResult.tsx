import { Typography } from "antd";
import { observer } from "mobx-react-lite";

import { MeasurementStore, InteractionsStore } from "@shared/misc";

const { Text } = Typography;

const MeasurementResult = () => {
  const drawType = InteractionsStore.drawType;
  let text = <></>;

  switch (drawType) {
    case "measure-area":
      text = <Text strong>{`Площадь: ${MeasurementStore.area}`}</Text>;
      break;
    case "measure-coordinate":
      text = <Text strong>{MeasurementStore.coordinate}</Text>;
      break;
    case "measure-length":
      text = <Text strong>{`Расстояние: ${MeasurementStore.length}`}</Text>;
  }

  return <>{text}</>;
};

export default observer(MeasurementResult);
