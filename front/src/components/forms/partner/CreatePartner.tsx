import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "../../../stores/entities";
import { getSelectOptions } from "../../../shared/lib/utils/forms";
import { createPartner } from "../../../shared/assets/forms";
import PartnersStore from "../../../stores/entities/PartnersStore";
import { Create } from "../../auxiliary/forms/actions";

const CreatePartner = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPartner(getSelectOptions(organizations));

  return <Create name={"контрагент"} store={PartnersStore} form={form} />;
};

export default observer(CreatePartner);
