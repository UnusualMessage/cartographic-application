import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useRegions } from "../../../../shared/lib/hooks";
import { getTrailerColumns } from "../../../../shared/lib/utils/tables";
import { TrailersStore } from "../../../../entities/stores/entities";
import { Table } from "../../../../features/components/common/Table";
import { Trailer } from "../../../../shared/api/types/entities";
import TableButtons from "../../../../shared/ui/TableButtons";
import CreateTrailer from "../../../../features/components/forms/trailer/CreateTrailer";
import UpdateTrailer from "../../../../features/components/forms/trailer/UpdateTrailer";
import DuplicateTrailer from "../../../../features/components/forms/trailer/DuplicateTrailer";
import RemoveTrailer from "../../../../features/components/forms/trailer/RemoveTrailer";

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
