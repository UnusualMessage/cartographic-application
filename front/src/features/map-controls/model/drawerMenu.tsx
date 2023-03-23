import {
  SearchOutlined,
  StopOutlined,
  EyeInvisibleOutlined,
  EllipsisOutlined,
  BorderOutlined,
  FullscreenOutlined,
  ShareAltOutlined,
  PrinterOutlined,
  InfoOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

import {
  AreaMeasurement,
  LayersFilled,
  LengthMeasurement,
} from "@shared/ui/icons";

export const drawerMenu: MenuProps["items"] = [
  {
    label: "Поиск",
    key: "search",
    icon: <SearchOutlined />,
  },

  {
    label: "Слои",
    key: "layers",
    icon: <LayersFilled />,
  },

  {
    type: "divider",
  },

  {
    label: "Измерение",
    key: "measurement",
    children: [
      {
        label: "Координата",
        key: "measure-coordinate",
        icon: <AimOutlined />,
      },

      {
        label: "Расстояние",
        key: "measure-length",
        icon: <LengthMeasurement />,
      },

      {
        label: "Площадь",
        key: "measure-area",
        icon: <AreaMeasurement />,
      },
    ],
  },

  {
    label: "Редактирование",
    key: "edit",
    children: [
      {
        label: "Выкл.",
        key: "none",
        icon: <StopOutlined />,
      },

      {
        label: "Курсор",
        key: "cursor",
        icon: <EyeInvisibleOutlined />,
      },

      {
        label: "Точка",
        key: "point",
        icon: <EllipsisOutlined />,
      },

      {
        label: "Полигон",
        key: "geozones",
        icon: <BorderOutlined />,
      },
    ],
  },

  {
    type: "divider",
  },

  {
    label: "Полный экран",
    key: "full-screen",
    icon: <FullscreenOutlined />,
  },

  {
    label: "Поделиться",
    key: "share",
    icon: <ShareAltOutlined />,
  },

  {
    label: "Печать",
    key: "print",
    icon: <PrinterOutlined />,
  },

  {
    type: "divider",
  },

  {
    label: "О проекте",
    key: "about",
    icon: <InfoOutlined />,
  },
];
