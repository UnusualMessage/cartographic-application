import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  SpeedsStore,
  CreateSpeed,
  UpdateSpeed,
  DuplicateSpeed,
  RemoveSpeed,
} from "@entities/speed";
import { getSpeedTable, mapSpeedToTable } from "@shared/lib";
import { TableSpeed } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Speeds = () => {
  const speed = SpeedsStore.speed;
  const speeds = SpeedsStore.speeds;

  const columns = getSpeedTable();

  const onSelection = async (speeds: TableSpeed[]) => {
    SpeedsStore.speed = await SpeedsStore.getById(speeds[0].id);
  };

  useEffect(() => {
    SpeedsStore.speed = undefined;
  }, []);

  return (
    <>
      <Table<TableSpeed>
        items={speeds.map(mapSpeedToTable)}
        columns={columns}
        setItems={onSelection}
      />
      <TableButtons>
        <CreateSpeed />
        <UpdateSpeed id={speed?.id} />
        <DuplicateSpeed id={speed?.id} />
        <RemoveSpeed id={speed?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Speeds);
