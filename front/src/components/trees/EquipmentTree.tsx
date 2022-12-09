import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";
import { ContextMenu2 } from "@blueprintjs/popover2";

import { wrapper } from "./tree.module.scss";

import EntitiesTree from "../common/EntitiesTree";
import { Node } from "../../types/nodes";
import { equipmentNodes } from "../../assets/nodes";
import { Equipment } from "../../types/entities";
import { EquipmentStore } from "../../stores/entities";
import { EquipmentMenu } from "../menus";
import { getEquipmentTreeClickHandler } from "../../utils/nodes";

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
