import { Divider } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { Node } from "@shared/api/types/nodes";
import { equipmentNodes } from "@shared/assets";
import { getEquipmentTreeClickHandler } from "@shared/lib";

import { wrapper } from "./tree.module.scss";
import { EquipmentStore } from "../../../entities/stores/entities";
import { Equipment } from "../../../shared/api/types/entities";
import EntitiesTree from "../../../shared/ui/EntitiesTree";
import { EquipmentMenu } from "../menus";

const fillNodes = (equipment?: Equipment[]) => {
  const initial: Node[] = cloneDeep(equipmentNodes);

  if (!equipment) {
    return initial;
  }

  equipment.forEach((item) => {
    const equipType = initial[0].childNodes?.find(
      (node) => node.nodeData === item.type.id
    );

    if (equipType) {
      equipType.childNodes?.push({
        id: item.id,
        label: (
          <ContextMenu2 content={<EquipmentMenu />}>{item.name}</ContextMenu2>
        ),
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

const EquipmentTree = () => {
  const equipment = EquipmentStore.equipment;

  return (
    <>
      <Divider />
      <EntitiesTree<Equipment>
        fillNodes={fillNodes}
        handleClick={getEquipmentTreeClickHandler()}
        source={equipment}
        className={wrapper}
      />
    </>
  );
};

export default observer(EquipmentTree);
