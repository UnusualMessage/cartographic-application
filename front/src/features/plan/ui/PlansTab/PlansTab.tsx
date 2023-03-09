import { observer } from "mobx-react-lite";

import { PlansStore, PlansChart } from "@entities/plan";
import { planTable } from "@shared/assets";
import { mapPlanToTable } from "@shared/lib";
import { TablePlan } from "@shared/misc";
import { Table } from "@shared/ui";

import { table } from "./tab.module.scss";

const PlansTab = () => {
  let plans = PlansStore.plans;

  const currentYear = PlansStore.chosenYear;

  if (currentYear) {
    plans = PlansStore.plans.filter((plan) => plan.year === currentYear);
  }

  return (
    <>
      <Table<TablePlan>
        items={plans.map(mapPlanToTable)}
        columns={planTable}
        className={table}
      />
      <PlansChart plans={plans} />
    </>
  );
};

export default observer(PlansTab);
