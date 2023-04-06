import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { EquipmentTypesStore } from "@entities/business";
import { equipmentTypeTable } from "@shared/assets";
import { mapEquipmentTypeToTable } from "@shared/lib";
import { TableEquipmentType } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";
import {
  CreateEquipmentType,
  UpdateEquipmentType,
  DuplicateEquipmentType,
  RemoveEquipmentType,
} from "features/edit";

const EquipmentTypes = () => {
  const type = EquipmentTypesStore.type;
  const types = EquipmentTypesStore.types;

  const onSelection = async (types: TableEquipmentType[]) => {
    EquipmentTypesStore.type = await EquipmentTypesStore.getById(types[0].id);
  };

  useEffect(() => {
    EquipmentTypesStore.type = undefined;
  }, []);

  return (
    <>
      <Table<TableEquipmentType>
        items={types.map(mapEquipmentTypeToTable)}
        columns={equipmentTypeTable}
        setItems={onSelection}
      />
      <TableButtons>
        <CreateEquipmentType />
        <UpdateEquipmentType id={type?.id} />
        <DuplicateEquipmentType id={type?.id} />
        <RemoveEquipmentType id={type?.id} />
      </TableButtons>
    </>
  );
};

export default observer(EquipmentTypes);
