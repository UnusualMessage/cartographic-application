import { observer } from "mobx-react-lite";

import { PlansTable } from "../tables";
import { PlansStore } from "../../stores/entities";
import PlansChart from "../charts";

const PlansTab = () => {
  let plans = PlansStore.plans;

  const currentYear = PlansStore.chosenYear;

  if (currentYear) {
    plans = PlansStore.plans.filter((plan) => plan.year === currentYear);
  }

  return (
    <>
      <PlansTable plans={plans} />
      <PlansChart plans={plans} />
    </>
  );
};

export default observer(PlansTab);
