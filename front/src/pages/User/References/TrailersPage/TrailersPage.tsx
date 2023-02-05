import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import CreateTrailer from "@entities/trailer/ui/forms/CreateTrailer";
import DuplicateTrailer from "@entities/trailer/ui/forms/DuplicateTrailer";
import RemoveTrailer from "@entities/trailer/ui/forms/RemoveTrailer";
import UpdateTrailer from "@entities/trailer/ui/forms/UpdateTrailer";
import { getTrailerColumns, useRegions } from "@shared/lib";

import { TrailersStore } from "../../../../entities/stores/entities";
import { Trailer } from "../../../../shared/api/types/entities";
import { Table } from "../../../../shared/ui/Table";
import TableButtons from "../../../../shared/ui/TableButtons";

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
