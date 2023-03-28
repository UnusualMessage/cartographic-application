import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { PlansStore } from "@entities/plan";
import type { Plan } from "@shared/misc";
import { Tree } from "@shared/ui";

import { getPlanNodes, planSelectHandler } from "../../model";

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
