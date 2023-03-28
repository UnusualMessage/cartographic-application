import { observer } from "mobx-react-lite";

import { Equipment } from "@shared/misc";
import { Tree } from "@shared/ui";

import {
  EquipmentStore,
  equipmentSelectHandler,
  getEquipmentNodes,
} from "../../model";

const EquipmentTree = () => {
  const equipment = EquipmentStore.equipment;

  return (
    <Tree<Equipment>
      fillNodes={getEquipmentNodes}
      onSelect={equipmentSelectHandler}
      source={equipment}
      defaultSelected={"tree-equipments"}
    />
  );
};

export default observer(EquipmentTree);
