import { observer } from "mobx-react-lite";
import { v4 as uuid } from "uuid";

import { EquipmentStore } from "@entities/equipment/model";
import { Equipment, Group } from "@shared/misc";
import { Tree } from "@shared/ui";

import {
  equipmentSelectHandler,
  getEquipmentNodesByType,
  getEquipmentNodesByStatus,
} from "../../model";

const EquipmentTree = () => {
  const equipment = EquipmentStore.equipment;
  const groups: Group<Equipment>[] = [
    {
      key: uuid(),
      label: "По типу",
      getNodes: getEquipmentNodesByType,
    },

    {
      key: uuid(),
      label: "По статусу",
      getNodes: getEquipmentNodesByStatus,
    },
  ];

  return (
    <Tree<Equipment>
      onSelect={equipmentSelectHandler}
      source={equipment}
      groups={groups}
      defaultSelected={"tree-equipments"}
    />
  );
};

export default observer(EquipmentTree);
