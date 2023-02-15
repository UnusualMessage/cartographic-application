import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  SpeedsStore,
  CreateSpeed,
  UpdateSpeed,
  DuplicateSpeed,
  RemoveSpeed,
} from "@entities/speed";
import { getSpeedColumns, useRegions } from "@shared/lib";
import { Speed as SpeedType } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Speed = () => {
  const speed = SpeedsStore.speed;
  const speeds = SpeedsStore.speeds;

  const { regions, onSelection } = useRegions((rowIndex: number) => {
    SpeedsStore.speed = speeds[rowIndex];
  });

  const columns = getSpeedColumns(speeds);

  useEffect(() => {
    SpeedsStore.speed = undefined;
  }, []);

  return (
    <>
      <Table<SpeedType>
        items={speeds}
        onSelection={onSelection}
        regions={regions}
        columns={columns}
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

export default observer(Speed);
