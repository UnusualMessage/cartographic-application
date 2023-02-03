import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { getPartnerColumns } from "../../../../shared/lib/utils/tables";
import { Table } from "../../../../features/components/common/Table";
import { Partner } from "../../../../shared/api/types/entities";
import TableButtons from "../../../../shared/ui/TableButtons";
import PartnersStore from "../../../../entities/stores/entities/PartnersStore";
import {
  CreatePartner,
  DuplicatePartner,
  RemovePartner,
  UpdatePartner,
} from "../../../../features/components/forms/partner";
import { useRegions } from "../../../../shared/lib/hooks";

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
