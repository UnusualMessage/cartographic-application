import { observer } from "mobx-react-lite";

import { PlansStore, PlansChart } from "@entities/plan";
import { getPlanTable, mapPlanToTable } from "@shared/lib";
import { TablePlan } from "@shared/misc";
import { Table } from "@shared/ui";

import { table } from "./tab.module.scss";

const PlansTab = () => {
  let plans = PlansStore.plans;

  const currentYear = PlansStore.chosenYear;

  if (currentYear) {
    plans = PlansStore.plans.filter((plan) => plan.year === currentYear);
  }

  const columns = getPlanTable();

  return (
    <>
      <Table<TablePlan>
        items={plans.map(mapPlanToTable)}
        columns={columns}
        className={table}
      />
      <PlansChart plans={plans} />
    </>
  );
};

export default observer(PlansTab);
