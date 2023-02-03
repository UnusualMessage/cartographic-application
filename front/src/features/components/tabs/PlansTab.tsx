import { observer } from "mobx-react-lite";

import { PlansStore } from "../../../entities/stores/entities";
import { PlansChart } from "../charts";
import { Table } from "../common/Table";
import { Plan } from "../../../shared/api/types/entities";
import { getPlanColumns } from "../../../shared/lib";

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
