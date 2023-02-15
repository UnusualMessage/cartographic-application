import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  TrailersStore,
  CreateTrailer,
  UpdateTrailer,
  DuplicateTrailer,
  RemoveTrailer,
} from "@entities/trailer";
import { getTrailerColumns, useRegions } from "@shared/lib";
import { Trailer } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const TrailersPage = () => {
  const trailer = TrailersStore.trailer;
  const trailers = TrailersStore.trailers;

  const { regions, onSelection } = useRegions((rowIndex: number) => {
    TrailersStore.trailer = trailers[rowIndex];
  });

  const columns = getTrailerColumns(trailers);

  useEffect(() => {
    TrailersStore.trailer = undefined;
  }, []);

  return (
    <>
      <Table<Trailer>
        items={trailers}
        onSelection={onSelection}
        regions={regions}
        columns={columns}
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

export default observer(TrailersPage);
