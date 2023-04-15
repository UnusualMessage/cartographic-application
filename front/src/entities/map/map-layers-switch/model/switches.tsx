import {
  FieldBinaryOutlined,
  BoldOutlined,
  CloudOutlined,
  BlockOutlined,
} from "@ant-design/icons";

import BaseLayersSwitch from "../ui/switches/BaseLayersSwitch";
import BordersLayersSwitch from "../ui/switches/BordersLayersSwitch";
import VectorLayersSwitch from "../ui/switches/VectorLayersSwitch";
import WeatherLayersSwitch from "../ui/switches/WeatherLayersSwitch";

export const switches = [
  {
    title: "Базовые слои",
    icon: <FieldBinaryOutlined />,
    component: <BaseLayersSwitch />,
  },

  {
    title: "Погодные слои",
    icon: <CloudOutlined />,
    component: <WeatherLayersSwitch />,
  },

  {
    title: "Векторные слои",
    icon: <BoldOutlined />,
    component: <VectorLayersSwitch />,
  },

  {
    title: "Административные слои",
    icon: <BlockOutlined />,
    component: <BordersLayersSwitch />,
  },
];
