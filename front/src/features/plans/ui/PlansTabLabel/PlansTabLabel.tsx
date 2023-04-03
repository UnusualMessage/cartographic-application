import { Badge } from "antd";
import { observer } from "mobx-react-lite";

import { PlansStore } from "@entities/business";

const PlansTabLabel = () => {
  const plans = PlansStore.plans;

  return (
    <Badge count={plans.length} size={"small"} color="blue" offset={[-10, -5]}>
      Планы
    </Badge>
  );
};

export default observer(PlansTabLabel);
