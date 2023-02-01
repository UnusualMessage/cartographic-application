import { observer } from "mobx-react-lite";

import { createSpeed } from "../../../assets/templates/forms";
import { Create } from "../../../components/auxiliary/forms/actions";
import { OrganizationsStore } from "../../../stores/entities";
import SpeedsStore from "../../../stores/entities/SpeedsStore";
import { getSelectOptions } from "../../../utils/forms";

const CreateSpeed = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createSpeed(getSelectOptions(organizations));

  return <Create name={"скоростной режим"} form={form} store={SpeedsStore} />;
};

export default observer(CreateSpeed);
