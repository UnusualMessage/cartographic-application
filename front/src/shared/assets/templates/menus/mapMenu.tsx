import {
  CopyOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

export const mapMenu: MenuProps["items"] = [
  {
    label: "Редактирование",
    type: "group",

    children: [
      {
        label: "Копировать",
        key: "copy",
        icon: <CopyOutlined />,
      },

      {
        label: "Вставить",
        key: "insert",
        icon: <PlusSquareOutlined />,
      },

      {
        label: "Удалить",
        key: "delete",
        icon: <MinusSquareOutlined />,
      },
    ],
  },

  {
    type: "divider",
  },

  {
    label: "Закрыть",
    key: "close",
    icon: <CloseOutlined />,
  },
];
