import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { EquipmentStore } from "@entities/business";
import {
  CreateEquipment,
  UpdateEquipment,
  DuplicateEquipment,
  RemoveEquipment,
} from "@features/edit";
import { equipmentTable } from "@shared/assets";
import { mapEquipmentToTable } from "@shared/lib";
import { TableEquipment } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Equipments = () => {
  const equipment = EquipmentStore.equip;
  const equipments = EquipmentStore.equipment;

  const onSelection = async (ids: TableEquipment[]) => {
    EquipmentStore.equip = await EquipmentStore.getById(ids[0].id);
  };

  useEffect(() => {
    EquipmentStore.equip = undefined;
  }, []);

  return (
    <>
      <Table<TableEquipment>
        items={equipments.map(mapEquipmentToTable)}
        columns={equipmentTable}
        setItems={onSelection}
      />
      <TableButtons>
        <CreateEquipment />
        <UpdateEquipment id={equipment?.id} />
        <DuplicateEquipment id={equipment?.id} />
        <RemoveEquipment id={equipment?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Equipments);
