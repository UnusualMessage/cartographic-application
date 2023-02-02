import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import SpeedsStore from "../../../../entities/stores/entities/SpeedsStore";
import {
  CreateSpeed,
  DuplicateSpeed,
  RemoveSpeed,
  UpdateSpeed,
} from "../../../../features/forms/speed";
import { Speed } from "../../../../shared/api/types/entities";
import { useRegions } from "../../../../shared/lib/hooks";
import { getSpeedColumns } from "../../../../shared/lib/utils/tables";
import { Table } from "../../../../shared/ui/Table";
import TableButtons from "../../../../shared/ui/TableButtons";

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
      <Table<Speed>
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
