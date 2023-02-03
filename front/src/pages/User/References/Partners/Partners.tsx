import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { getPartnerColumns, useRegions } from "@shared/lib";

import PartnersStore from "../../../../entities/stores/entities/PartnersStore";
import { Table } from "../../../../features/components/common/Table";
import {
  CreatePartner,
  DuplicatePartner,
  RemovePartner,
  UpdatePartner,
} from "../../../../features/components/forms/partner";
import { Partner } from "../../../../shared/api/types/entities";
import TableButtons from "../../../../shared/ui/TableButtons";

const Partners = () => {
  const partner = PartnersStore.partner;
  const partners = PartnersStore.partners;

  const { regions, onSelection } = useRegions((rowIndex: number) => {
    PartnersStore.partner = partners[rowIndex];
  });

  const columns = getPartnerColumns(partners);

  useEffect(() => {
    PartnersStore.partner = undefined;
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
