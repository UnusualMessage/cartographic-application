import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { GeozonesStore } from "@entities/business";
import {
  CreateGeozone,
  UpdateGeozone,
  DuplicateGeozone,
  RemoveGeozone,
} from "@features/edit";
import { geozoneTable } from "@shared/assets";
import { mapGeozoneToTable } from "@shared/lib";
import { TableGeozone } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Geozones = () => {
  const geozone = GeozonesStore.geozone;
  const geozones = GeozonesStore.geozones;

  const onSelection = async (ids: TableGeozone[]) => {
    GeozonesStore.geozone = await GeozonesStore.getById(ids[0].id);
  };

  useEffect(() => {
    GeozonesStore.geozone = undefined;
  }, []);

  return (
    <>
      <Table<TableGeozone>
        items={geozones.map(mapGeozoneToTable)}
        columns={geozoneTable}
        setItems={onSelection}
      />
      <TableButtons>
        <CreateGeozone />
        <UpdateGeozone id={geozone?.id} />
        <DuplicateGeozone id={geozone?.id} />
        <RemoveGeozone id={geozone?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Geozones);
