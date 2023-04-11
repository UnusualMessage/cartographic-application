import React from "react";

import { Reports } from "@shared/misc";
import { EmptyInformation } from "@shared/ui";

export const reports: Reports = {
  equipmentCoordinates: {
    key: "equipmentCoordinates",
    title: "Отчет по расположению техники",
    link: "equipment-coordinates",
    component: <EmptyInformation />,
  },

  equipmentDailyWorks: {
    key: "equipmentDailyWorks",
    title: "Отчет по дневным работам",
    link: "equipment-daily-works",
    component: <EmptyInformation />,
  },

  finishedWorks: {
    key: "finishedWorks",
    title: "Отчет по завершенным работам",
    link: "finished-works",
    component: <EmptyInformation />,
  },
};
