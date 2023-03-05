import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  PartnersStore,
  CreatePartner,
  UpdatePartner,
  DuplicatePartner,
  RemovePartner,
} from "@entities/partner";
import { getPartnerTable, mapPartnerToTable } from "@shared/lib";
import { TablePartner } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Partners = () => {
  const partner = PartnersStore.partner;
  const partners = PartnersStore.partners;

  const columns = getPartnerTable();

  const onSelection = async (partners: TablePartner[]) => {
    PartnersStore.partner = await PartnersStore.getById(partners[0].id);
  };

  useEffect(() => {
    PartnersStore.partner = undefined;
  }, []);

  return (
    <>
      <Table<TablePartner>
        items={partners.map(mapPartnerToTable)}
        columns={columns}
        setItems={onSelection}
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
