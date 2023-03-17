import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "@entities/organization";
import { PartnersStore } from "@entities/partner";
import { updatePartner } from "@shared/assets";
import { getSelectOptions } from "@shared/lib";
import { Partner, UpdatePartner as UpdatePartnerType } from "@shared/misc";
import { Update } from "@shared/ui";

import { getPartnerDefaultValues } from "../../model";

interface Props {
  id?: string;
}

const UpdatePartner = ({ id }: Props) => {
  const organizations = OrganizationsStore.organizations;

  const form = updatePartner(getSelectOptions(organizations));

  return (
    <Update<Partner, UpdatePartnerType>
      name={"контрагент"}
      store={PartnersStore}
      form={form}
      id={id}
      getDefaultValues={getPartnerDefaultValues}
    />
  );
};

export default observer(UpdatePartner);
