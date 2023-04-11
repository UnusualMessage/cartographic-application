import { FolderOutlined, FileOutlined } from "@ant-design/icons";
import React from "react";

import { Node } from "@shared/misc";

import { reports } from "./reports";

export const reportsNodes: Node[] = [
  {
    key: "tree-reports",
    icon: <FolderOutlined />,
    title: "Все",

    children: [
      {
        ...reports.equipmentCoordinates,
        data: reports.equipmentCoordinates.link,
        icon: <FileOutlined />,
      },

      {
        ...reports.equipmentDailyWorks,
        data: reports.equipmentDailyWorks.link,
        icon: <FileOutlined />,
      },

      {
        ...reports.finishedWorks,
        data: reports.finishedWorks.link,
        icon: <FileOutlined />,
      },
    ],
  },
];
