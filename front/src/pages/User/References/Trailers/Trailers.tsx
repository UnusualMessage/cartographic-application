import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { getTrailerColumns, useRegions } from "@shared/lib";

import { TrailersStore } from "../../../../entities/stores/entities";
import { Table } from "../../../../features/components/common/Table";
import CreateTrailer from "../../../../features/components/forms/trailer/CreateTrailer";
import DuplicateTrailer from "../../../../features/components/forms/trailer/DuplicateTrailer";
import RemoveTrailer from "../../../../features/components/forms/trailer/RemoveTrailer";
import UpdateTrailer from "../../../../features/components/forms/trailer/UpdateTrailer";
import { Trailer } from "../../../../shared/api/types/entities";
import TableButtons from "../../../../shared/ui/TableButtons";

const Trailers = () => {
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

export default observer(Trailers);
