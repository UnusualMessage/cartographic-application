import { Tag } from "antd";

import { translateStatus } from "../../../lib";
import type { Column, Equipment } from "../../../misc";

export const equipmentTable: Column<Equipment>[] = [
  {
    title: "Название",
    dataIndex: "name",
    showSorterTooltip: false,
    sorter: {
      compare: (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
    },
  },

  {
    title: "Тип",
    dataIndex: "type",
  },

  {
    title: "Статус",
    dataIndex: "status",
    render: (_, { status }) => {
      let color: undefined | string;
      const enStatus = translateStatus(status, "en");

      switch (enStatus) {
        case "disabled":
          color = "#ff4d4f";
          break;
        case "waiting":
          color = "#40a9ff";
          break;
        case "working":
          color = "#73d13d";
          break;
        case "parking":
          color = "#d9d9d9";
          break;
        case "no-data":
          color = "#000000";
      }

      return <Tag color={color}>{enStatus.toUpperCase()}</Tag>;
    },
  },

  {
    title: "Организация",
    dataIndex: "organization",
  },

  {
    title: "Подразделение",
    dataIndex: "department",
  },
];
