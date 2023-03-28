import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import type { Plan } from "@shared/misc";
import { Tree } from "@shared/ui";

import { PlansStore, planSelectHandler, getPlanNodes } from "../../model";

const PlansTree = () => {
  const plans = PlansStore.plans;

  useEffect(() => {
    PlansStore.chosenYear = undefined;
  }, []);

  return (
    <Tree<Plan>
      fillNodes={getPlanNodes}
      source={plans}
      onSelect={planSelectHandler}
      defaultSelected={"tree-plans"}
    />
  );
};

export default observer(PlansTree);
