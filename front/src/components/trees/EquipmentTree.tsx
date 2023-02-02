import { Divider } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { equipmentNodes } from "../../assets/templates/nodes";
import { EquipmentStore } from "../../stores/entities";
import { Equipment } from "../../types/entities";
import { Node } from "../../types/nodes";
import { getEquipmentTreeClickHandler } from "../../utils/nodes";
import EntitiesTree from "../common/EntitiesTree";
import { EquipmentMenu } from "../menus";
import { wrapper } from "./tree.module.scss";

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
