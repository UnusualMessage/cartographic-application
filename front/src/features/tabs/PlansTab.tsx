import { observer } from "mobx-react-lite";

import { PlansStore } from "@entities/plan";
import PlansChart from "@entities/plan/ui/PlansChart";
import { Plan } from "@shared/misc/types/entities";
import { getPlanColumns } from "@shared/lib/utils/tables/getPlanColumns";
import { Table } from "@shared/ui/Table";

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
