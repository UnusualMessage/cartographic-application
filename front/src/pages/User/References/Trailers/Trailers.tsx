import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  TrailersStore,
  CreateTrailer,
  UpdateTrailer,
  DuplicateTrailer,
  RemoveTrailer,
} from "@entities/trailer";
import { trailerTable } from "@shared/assets";
import { mapTrailerToTable } from "@shared/lib";
import { TableTrailer } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Trailers = () => {
  const trailer = TrailersStore.trailer;
  const trailers = TrailersStore.trailers;

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
        columns={trailerTable}
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
