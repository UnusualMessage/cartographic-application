import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { EmployeesStore, MountedsStore } from "@entities/business";
import { mountedTable } from "@shared/assets";
import { mapMountedToTable } from "@shared/lib";
import { TableMounted } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";
import {
  CreateMounted,
  UpdateMounted,
  RemoveMounted,
  DuplicateMounted,
} from "features/edit";

const Mounteds = () => {
  const mounted = MountedsStore.mounted;
  const mounteds = MountedsStore.mounteds;

  const onSelection = async (mounteds: TableMounted[]) => {
    MountedsStore.mounted = await MountedsStore.getById(mounteds[0].id);
  };

  useEffect(() => {
    EmployeesStore.employee = undefined;
  }, []);

  return (
    <>
      <Table<TableMounted>
        items={mounteds.map(mapMountedToTable)}
        columns={mountedTable}
        setItems={onSelection}
      />
      <TableButtons>
        <CreateMounted />
        <UpdateMounted id={mounted?.id} />
        <DuplicateMounted id={mounted?.id} />
        <RemoveMounted id={mounted?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Mounteds);
