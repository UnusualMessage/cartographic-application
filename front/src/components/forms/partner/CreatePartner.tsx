import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "../../../stores/entities";
import { getSelectOptions } from "../../../utils/forms";
import { createPartner } from "../../../assets/forms";
import PartnersStore from "../../../stores/entities/PartnersStore";
import { Create } from "../../auxiliary/forms/actions";

const CreatePartner = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPartner(getSelectOptions(organizations));

  return <Create name={"контрагент"} store={PartnersStore} form={form} />;
};

export default observer(CreatePartner);
