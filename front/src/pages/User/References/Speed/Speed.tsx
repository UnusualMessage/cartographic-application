import { useEffect, useState } from "react";
import { Region, Regions } from "@blueprintjs/table";
import { observer } from "mobx-react-lite";

import { getSpeedColumns } from "../../../../utils/tables";
import { Table } from "../../../../components/common/Table";
import { Speed } from "../../../../types/entities";
import TableButtons from "../../../../components/auxiliary/TableButtons";
import SpeedsStore from "../../../../stores/entities/SpeedsStore";
import {
  CreateSpeed,
  DuplicateSpeed,
  RemoveSpeed,
  UpdateSpeed,
} from "../../../../components/forms/speed";

const Speed = () => {
  const [regions, setRegions] = useState<Region[]>([]);

  const speed = SpeedsStore.speed;
  const speeds = SpeedsStore.speeds;

  const onSelection = (regions: Region[]) => {
    const row = regions[0].rows;

    if (row) {
      const rowIndex = row[0];
      const region = Regions.row(rowIndex);

      setRegions([region]);
      SpeedsStore.speed = speeds[rowIndex];
    }
  };

  const columns = getSpeedColumns(speeds);

  useEffect(() => {
    SpeedsStore.speed = undefined;
    setRegions([]);
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
