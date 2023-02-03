import { observer } from "mobx-react-lite";

import { getPlanColumns } from "@shared/lib";

import { PlansStore } from "../../../entities/stores/entities";
import { Plan } from "../../../shared/api/types/entities";
import { PlansChart } from "../charts";
import { Table } from "../common/Table";

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
