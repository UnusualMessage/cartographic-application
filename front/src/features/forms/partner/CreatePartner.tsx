import { observer } from "mobx-react-lite";

import { createPartner } from "../../../assets/templates/forms";
import { Create } from "../../../components/auxiliary/forms/actions";
import { OrganizationsStore } from "../../../stores/entities";
import PartnersStore from "../../../stores/entities/PartnersStore";
import { getSelectOptions } from "../../../utils/forms";

const CreatePartner = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPartner(getSelectOptions(organizations));

  return <Create name={"контрагент"} store={PartnersStore} form={form} />;
};

export default observer(CreatePartner);
