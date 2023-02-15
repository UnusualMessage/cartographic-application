import { observer } from "mobx-react-lite";

import { PlansStore, PlansChart } from "@entities/plan";
import { getPlanColumns } from "@shared/lib";
import { Plan } from "@shared/misc";
import { Table } from "@shared/ui";

const PlansTab = () => {
  let plans = PlansStore.plans;

  const currentYear = PlansStore.chosenYear;

  if (currentYear) {
    plans = PlansStore.plans.filter((plan) => plan.year === currentYear);
  }

  const columns = getPlanColumns(plans);

  return (
    <>
      <Table<Plan> items={plans} width={60} columns={columns} />
      <PlansChart plans={plans} />
    </>
  );
};

export default observer(PlansTab);
