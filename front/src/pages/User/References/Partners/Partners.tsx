import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import PartnersStore from "../../../../entities/stores/entities/PartnersStore";
import {
  CreatePartner,
  DuplicatePartner,
  RemovePartner,
  UpdatePartner,
} from "../../../../features/forms/partner";
import { Partner } from "../../../../shared/api/types/entities";
import { useRegions } from "../../../../shared/lib/hooks";
import { getPartnerColumns } from "../../../../shared/lib/utils/tables";
import { Table } from "../../../../shared/ui/Table";
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
