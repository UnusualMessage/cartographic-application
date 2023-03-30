import { Bar } from "@ant-design/plots";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { translateStatus } from "@shared/lib";
import { Status } from "@shared/misc";
import { chart, main } from "@shared/styles";

import { wrapper, content } from "./chart.module.scss";
import { EquipmentStore } from "../../model";

const StatusesChart = () => {
  const equipment = EquipmentStore.equipment;

  const data = [
    {
      status: "waiting",
      count: 0,
    },
    {
      status: "working",
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

  for (const item of data) {
    item.status = translateStatus(item.status as Status);
  }

  const config = {
    data,
    xField: "count",
    yField: "status",
    meta: {
      status: {
        alias: "Статус",
      },
      count: {
        alias: "Количество",
      },
    },
  };
  return (
    <div className={classNames(chart, wrapper)}>
      <div className={classNames(main, content)}>
        <Bar
          height={200}
          {...config}
          tooltip={{ fields: ["status", "count"] }}
          label={{ position: "middle" }}
        />
      </div>
    </div>
  );
};

export default observer(StatusesChart);
