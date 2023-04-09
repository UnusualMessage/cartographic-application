import { BarConfig, PieConfig } from "@ant-design/plots";

import { translateStatus } from "@shared/lib";
import { Equipment, Status } from "@shared/misc";

export const getStatusesChartConfig = (equipment: Equipment[]) => {
  const data = [
    {
      status: "working",
      count: 0,
    },
    {
      status: "waiting",
      count: 0,
    },
    {
      status: "parking",
      count: 0,
    },
    {
      status: "no-data",
      count: 0,
    },
    {
      status: "disabled",
      count: 0,
    },
  ];

  for (const item of equipment) {
    const cell = data.find((status) => status.status === item.status);

    if (cell) {
      cell.count += 1;
    }
  }

  const config: BarConfig = {
    data,
    label: { position: "middle" },
    xField: "count",
    yField: "status",

    yAxis: {
      label: {
        formatter: (text) => {
          return translateStatus(text as Status, "ru");
        },
      },
    },

    tooltip: {
      fields: ["status", "count"],
      formatter: (data) => {
        return { name: translateStatus(data.status, "ru"), value: data.count };
      },
      showTitle: false,
    },

    color: ({ status }) => {
      switch (status) {
        case "disabled":
          return "#ff4d4f";
        case "waiting":
          return "#40a9ff";
        case "working":
          return "#73d13d";
        case "parking":
          return "#d9d9d9";
        case "no-data":
          return "#000000";
      }

      return "#73d13d";
    },

    meta: {
      status: {
        alias: "Статус",
      },
      count: {
        alias: "Количество",
      },
    },
  };

  return config;
};

export const getTypesChartConfig = (equipment: Equipment[]) => {
  let data = [
    {
      status: "working",
      count: 0,
    },
    {
      status: "waiting",
      count: 0,
    },
    {
      status: "parking",
      count: 0,
    },
    {
      status: "no-data",
      count: 0,
    },
    {
      status: "disabled",
      count: 0,
    },
  ];

  for (const item of equipment) {
    const cell = data.find((status) => status.status === item.status);

    if (cell) {
      cell.count += 1;
    }
  }

  data = data.filter((item) => item.count !== 0);

  const config: PieConfig = {
    data,
    label: {
      content: ({ status, count }) =>
        `${translateStatus(status, "ru")} - ${count}`,
      style: {
        fontSize: 12,
      },
    },

    legend: false,

    angleField: "count",
    colorField: "status",

    tooltip: {
      fields: ["status", "count"],
      formatter: (data) => {
        return { name: translateStatus(data.status, "ru"), value: data.count };
      },
      showTitle: false,
    },

    color: ({ status }) => {
      switch (status) {
        case "disabled":
          return "#ff4d4f";
        case "waiting":
          return "#40a9ff";
        case "working":
          return "#73d13d";
        case "parking":
          return "#d9d9d9";
        case "no-data":
          return "#000000";
      }

      return "#73d13d";
    },

    meta: {
      status: {
        alias: "Статус",
      },
      count: {
        alias: "Количество",
      },
    },
  };

  return config;
};
