import { observer } from "mobx-react-lite";

import { createPartner } from "../../../shared/assets/templates/forms";
import { getSelectOptions } from "../../../shared/lib/utils/forms";
import { OrganizationsStore } from "../../../entities/stores/entities";
import PartnersStore from "../../../entities/stores/entities/PartnersStore";
import { Create } from "../../auxiliary/forms/actions";

const CreatePartner = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPartner(getSelectOptions(organizations));

  return <Create name={"контрагент"} store={PartnersStore} form={form} />;
};

export default observer(CreatePartner);
