import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  TrailersStore,
  CreateTrailer,
  UpdateTrailer,
  DuplicateTrailer,
  RemoveTrailer,
} from "@entities/trailer";
import { getTrailerTable, mapTrailerToTable } from "@shared/lib";
import { TableTrailer } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Trailers = () => {
  const trailer = TrailersStore.trailer;
  const trailers = TrailersStore.trailers;

  const columns = getTrailerTable();

  const onSelection = async (trailers: TableTrailer[]) => {
    TrailersStore.trailer = await TrailersStore.getById(trailers[0].id);
  };

  useEffect(() => {
    TrailersStore.trailer = undefined;
  }, []);

  return (
    <>
      <Table<TableTrailer>
        items={trailers.map(mapTrailerToTable)}
        columns={columns}
        setItems={onSelection}
      />
      <TableButtons>
        <CreateTrailer />
        <UpdateTrailer id={trailer?.id} />
        <DuplicateTrailer id={trailer?.id} />
        <RemoveTrailer id={trailer?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Trailers);
