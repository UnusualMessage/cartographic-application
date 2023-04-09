import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { SpeedsStore } from "@entities/business";
import {
  CreateSpeed,
  UpdateSpeed,
  DuplicateSpeed,
  RemoveSpeed,
} from "@features/edit";
import { speedTable } from "@shared/assets";
import { mapSpeedToTable } from "@shared/lib";
import { TableSpeed } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Speeds = () => {
  const speed = SpeedsStore.speed;
  const speeds = SpeedsStore.speeds;

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
        columns={speedTable}
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
