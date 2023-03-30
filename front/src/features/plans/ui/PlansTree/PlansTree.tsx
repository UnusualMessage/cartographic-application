import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";

import { PlansStore } from "@entities/plan";
import type { Plan } from "@shared/misc";
import { Group } from "@shared/misc";
import { Tree } from "@shared/ui";

import { getPlanNodes, planSelectHandler } from "../../model";

const PlansTree = () => {
  const plans = PlansStore.plans;

  useEffect(() => {
    PlansStore.chosenYear = undefined;
  }, []);

  const groups: Group<Plan>[] = [
    {
      key: uuid(),
      label: "По году",
      getNodes: getPlanNodes,
      defaultSelected: true,
    },
  ];

  return (
    <Tree<Plan>
      source={plans}
      groups={groups}
      onSelect={planSelectHandler}
      defaultSelected={"tree-plans"}
    />
  );
};

export default observer(PlansTree);
