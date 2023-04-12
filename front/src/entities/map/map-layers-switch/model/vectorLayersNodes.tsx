import { CarOutlined, ToolOutlined } from "@ant-design/icons";

import {
  transportLayerId,
  geozonesLayerId,
  measurementLayerId,
} from "@shared/constants";
import { Node } from "@shared/misc";
import { LayersFilled } from "@shared/ui";

export const vectorLayersNodes: Node[] = [
  {
    title: "Векторные слои",
    key: "vector-layers",
    icon: <></>,
    children: [
      {
        title: "Техника",
        key: transportLayerId,
        icon: <CarOutlined />,
      },

      {
        title: "Геозоны",
        key: geozonesLayerId,
        icon: <LayersFilled />,
      },

      {
        title: "Измерение",
        key: measurementLayerId,
        icon: <ToolOutlined />,
      },
    ],
  },
];
