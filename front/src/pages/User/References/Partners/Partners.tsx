import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  PartnersStore,
  CreatePartner,
  UpdatePartner,
  DuplicatePartner,
  RemovePartner,
} from "@entities/partner";
import { getPartnerColumns, useRegions } from "@shared/lib";
import { Partner } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

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
