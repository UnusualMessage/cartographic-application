import { observer } from "mobx-react-lite";

import { PlansTable } from "../tables";
import { PlansStore } from "../../stores/entities";

const PlansTab = () => {
  const plans = PlansStore.plans;

  return (
    <>
      <PlansTable plans={plans} />
    </>
  );
};

export default observer(PlansTab);
