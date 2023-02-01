import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import TableButtons from "../../../../components/auxiliary/TableButtons";
import { Table } from "../../../../components/common/Table";
import CreateTrailer from "../../../../features/forms/trailer/CreateTrailer";
import DuplicateTrailer from "../../../../features/forms/trailer/DuplicateTrailer";
import RemoveTrailer from "../../../../features/forms/trailer/RemoveTrailer";
import UpdateTrailer from "../../../../features/forms/trailer/UpdateTrailer";
import { useRegions } from "../../../../shared/lib/hooks";
import { getTrailerColumns } from "../../../../shared/lib/utils/tables";
import { TrailersStore } from "../../../../stores/entities";
import { Trailer } from "../../../../types/entities";

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
