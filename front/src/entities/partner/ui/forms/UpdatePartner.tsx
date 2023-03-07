import { observer } from "mobx-react-lite";

import { updatePartner } from "@shared/assets";
import { getSelectOptions, getPartnerDefaultValues } from "@shared/lib";
import { Partner, UpdatePartner as UpdatePartnerType } from "@shared/misc";
import { Update } from "@shared/ui";

import { OrganizationsStore } from "../../../organization";
import { PartnersStore } from "../../model";

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
