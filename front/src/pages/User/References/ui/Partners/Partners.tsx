import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { PartnersStore } from "@entities/partner";
import {
  CreatePartner,
  UpdatePartner,
  DuplicatePartner,
  RemovePartner,
} from "@features/edit-partners";
import { partnerTable } from "@shared/assets";
import { mapPartnerToTable } from "@shared/lib";
import { TablePartner } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Partners = () => {
  const partner = PartnersStore.partner;
  const partners = PartnersStore.partners;

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
        columns={partnerTable}
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
