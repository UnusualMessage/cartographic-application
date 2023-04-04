import {
  SearchOutlined,
  FullscreenOutlined,
  ShareAltOutlined,
  PrinterOutlined,
  InfoOutlined,
  AimOutlined,
  ToolFilled,
  EditFilled,
  SendOutlined,
  StopFilled,
} from "@ant-design/icons";
import { MenuProps } from "antd";

import { LineStringFilled, PolygonFilled } from "@shared/ui";
import { LayersFilled } from "@shared/ui/icons";

export const menu: MenuProps["items"] = [
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
    icon: <ToolFilled />,
    children: [
      {
        label: "Координата",
        key: "measure-coordinate",
        icon: <AimOutlined />,
      },

      {
        label: "Расстояние",
        key: "measure-length",
        icon: <LineStringFilled />,
      },

      {
        label: "Площадь",
        key: "measure-area",
        icon: <PolygonFilled />,
      },
    ],
  },

  {
    label: "Редактирование",
    key: "edit",
    icon: <EditFilled />,
    children: [
      {
        label: "Выкл.",
        key: "none",
        icon: <StopFilled />,
      },

      {
        label: "Курсор",
        key: "cursor",
        icon: <SendOutlined />,
      },

      {
        label: "Полигон",
        key: "geozones",
        icon: <PolygonFilled />,
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
