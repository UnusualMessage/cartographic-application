import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import TableButtons from "../../../../features/auxiliary/TableButtons";
import { Table } from "../../../../features/common/Table";
import {
  CreatePartner,
  DuplicatePartner,
  RemovePartner,
  UpdatePartner,
} from "../../../../features/forms/partner";
import { useRegions } from "../../../../shared/lib/hooks";
import { getPartnerColumns } from "../../../../shared/lib/utils/tables";
import PartnersStore from "../../../../entities/stores/entities/PartnersStore";
import { Partner } from "../../../../shared/api/types/entities";

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
