import React from "react";

import { StatusesChart } from "@entities/business";
import { TabPage } from "@shared/ui";

const StatusesTab = () => {
  return (
    <TabPage>
      <StatusesChart />
    </TabPage>
  );
};

export default StatusesTab;
