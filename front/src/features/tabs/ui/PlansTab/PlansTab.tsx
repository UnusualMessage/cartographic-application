import { observer } from "mobx-react-lite";

import { PlansStore, PlansChart } from "@entities/business";
import { TabPage } from "@entities/info-tabs-page";
import { planTable } from "@shared/assets";
import { mapPlanToTable } from "@shared/lib";
import { TablePlan } from "@shared/misc";
import { Table } from "@shared/ui";

import { table } from "./tab.module.scss";

const PlansTab = () => {
  const plans = PlansStore.plans;

  return (
    <TabPage>
      <Table<TablePlan>
        items={plans.map(mapPlanToTable)}
        columns={planTable}
        className={table}
      />
      <PlansChart />
    </TabPage>
  );
};

export default observer(PlansTab);
