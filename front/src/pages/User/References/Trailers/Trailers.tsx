import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { TrailersStore } from "../../../../entities/stores/entities";
import CreateTrailer from "../../../../features/forms/trailer/CreateTrailer";
import DuplicateTrailer from "../../../../features/forms/trailer/DuplicateTrailer";
import RemoveTrailer from "../../../../features/forms/trailer/RemoveTrailer";
import UpdateTrailer from "../../../../features/forms/trailer/UpdateTrailer";
import { Trailer } from "../../../../shared/api/types/entities";
import { useRegions } from "../../../../shared/lib/hooks";
import { getTrailerColumns } from "../../../../shared/lib/utils/tables";
import { Table } from "../../../../shared/ui/Table";
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
