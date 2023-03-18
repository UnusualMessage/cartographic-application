import { ExportOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

export const geozoneMenu: MenuProps["items"] = [
  {
    label: "Экспорт",
    key: "export",
    children: [
      {
        label: "Экспорт (EPSG-4326)",
        key: "export-4326",
        icon: <ExportOutlined />,
      },

      {
        label: "Экспорт (EPSG-3857)",
        key: "export-3857",
        icon: <ExportOutlined />,
      },
    ],
  },
];
