import { Typography, Space } from "antd";
import { observer } from "mobx-react-lite";
import { toLonLat } from "ol/proj";

import { MapStore } from "@shared/misc";

import { container, label, value, wrapper } from "./coordinates.module.scss";

const { Text } = Typography;

const Coordinates = () => {
  const coordinate = toLonLat(MapStore.cursorCoordinate ?? [0, 0]);

  return (
    <Space className={wrapper} align={"start"} direction={"vertical"}>
      <Space className={container}>
        <Text className={label}>{"Широта: "}</Text>
        <Text className={value}>{coordinate[1].toFixed(2)}</Text>
      </Space>

      <Space className={container}>
        <Text className={label}>{"Долгота: "}</Text>
        <Text className={value}>{coordinate[0].toFixed(2)}</Text>
      </Space>
    </Space>
  );
};

export default observer(Coordinates);
