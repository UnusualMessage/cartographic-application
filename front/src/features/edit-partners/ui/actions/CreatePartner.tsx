import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "@entities/organization";
import { PartnersStore } from "@entities/partner";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createPartner } from "../../model";

const CreatePartner = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPartner(getSelectOptions(organizations));

  return <Create name={"контрагент"} store={PartnersStore} form={form} />;
};

export default observer(CreatePartner);
