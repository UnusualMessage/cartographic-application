import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import EntitiesTree from "../../../EntitiesTree";
import { Node } from "../../../../types/Node";
import { equipmentNodes } from "../../../../assets/nodes";
import { Equipment } from "../../../../types/entities";
import { EquipmentStore } from "../../../../stores/entities";

const fillNodes = (equipment: Equipment[]) => {
  const initial: Node[] = cloneDeep(equipmentNodes);

  equipment.forEach((item) => {
    const equipType = initial[0].childNodes?.find(
      (node) => node.nodeData === item.type.id
    );

    if (equipType) {
      equipType.childNodes?.push({
        id: item.id,
        label: item.name,
        icon: "document",
        nodeData: item,
      });
    }
  });

  if (initial[0].childNodes) {
    for (const folder of initial[0].childNodes) {
      if (!folder.childNodes?.length) {
        folder.disabled = true;
        folder.isExpanded = true;
      }
    }
  }

  return initial;
};

const Equipment = () => {
  const equipment = EquipmentStore.equipment;

  return (
    <>
      <Divider />
      <EntitiesTree<Equipment>
        fillNodes={fillNodes}
        source={equipment}
        className={wrapper}
      />
    </>
  );
};

export default observer(Equipment);
