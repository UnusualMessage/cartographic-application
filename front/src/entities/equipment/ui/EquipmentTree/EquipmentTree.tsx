import { Divider } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import EquipmentStore from "@entities/equipment/model/EquipmentStore";
import EquipmentMenu from "@entities/equipment/ui/EquipmentMenu";
import { equipmentNodes } from "@shared/assets/templates/nodes";
import { getEquipmentTreeClickHandler } from "@shared/lib/utils/nodes/getEquipmentTreeClickHandler";
import { Equipment } from "@shared/misc/types/entities";
import { Node } from "@shared/misc/types/node";
import { tree } from "@shared/styles";
import EntitiesTree from "@shared/ui/EntitiesTree";

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
        className={tree}
      />
    </>
  );
};

export default observer(EquipmentTree);
