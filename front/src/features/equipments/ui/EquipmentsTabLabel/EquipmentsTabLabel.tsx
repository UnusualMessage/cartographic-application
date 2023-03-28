import { Badge } from "antd";
import { observer } from "mobx-react-lite";

import { EquipmentStore } from "@entities/equipment";

const EquipmentsTabLabel = () => {
  const equipment = EquipmentStore.equipment;

  return (
    <Badge
      count={equipment.length}
      size={"small"}
      color="blue"
      offset={[-10, -5]}
    >
      Техника
    </Badge>
  );
};

export default observer(EquipmentsTabLabel);
