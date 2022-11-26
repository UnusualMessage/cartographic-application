import { useEffect, useState } from "react";
import { Region, Regions } from "@blueprintjs/table";
import { observer } from "mobx-react-lite";

import { getPartnerColumns } from "../../../../utils/tables";
import { Table } from "../../../../components/common/Table";
import { Partner } from "../../../../types/entities";
import TableButtons from "../../../../components/auxiliary/TableButtons";
import PartnersStore from "../../../../stores/entities/PartnersStore";
import {
  CreatePartner,
  DuplicatePartner,
  RemovePartner,
  UpdatePartner,
} from "../../../../components/forms/partner";

const Partners = () => {
  const [regions, setRegions] = useState<Region[]>([]);

  const partner = PartnersStore.partner;
  const partners = PartnersStore.partners;

  const onSelection = (regions: Region[]) => {
    const row = regions[0].rows;

    if (row) {
      const rowIndex = row[0];
      const region = Regions.row(rowIndex);

      setRegions([region]);
      PartnersStore.partner = partners[rowIndex];
    }
  };

  const columns = getPartnerColumns(partners);

  useEffect(() => {
    PartnersStore.partner = undefined;
    setRegions([]);
  }, []);

  return (
    <>
      <Table<Partner>
        items={partners}
        onSelection={onSelection}
        regions={regions}
        columns={columns}
      />
      <TableButtons>
        <CreatePartner />
        <UpdatePartner id={partner?.id} />
        <DuplicatePartner id={partner?.id} />
        <RemovePartner id={partner?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Partners);
