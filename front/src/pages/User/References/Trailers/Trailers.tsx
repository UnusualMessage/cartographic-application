import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import TableButtons from "../../../../components/auxiliary/TableButtons";
import { Table } from "../../../../components/common/Table";
import CreateTrailer from "../../../../components/forms/trailer/CreateTrailer";
import DuplicateTrailer from "../../../../components/forms/trailer/DuplicateTrailer";
import RemoveTrailer from "../../../../components/forms/trailer/RemoveTrailer";
import UpdateTrailer from "../../../../components/forms/trailer/UpdateTrailer";
import { useRegions } from "../../../../shared/hooks";
import { TrailersStore } from "../../../../stores/entities";
import { Trailer } from "../../../../types/entities";
import { getTrailerColumns } from "../../../../utils/tables";

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
