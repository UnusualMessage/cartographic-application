import { observer } from "mobx-react-lite";

import { Create } from "../../../components/auxiliary/forms/actions";
import { createSpeed } from "../../../shared/assets/templates/forms";
import { getSelectOptions } from "../../../shared/lib/utils/forms";
import { OrganizationsStore } from "../../../stores/entities";
import SpeedsStore from "../../../stores/entities/SpeedsStore";

const CreateSpeed = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createSpeed(getSelectOptions(organizations));

  return <Create name={"скоростной режим"} form={form} store={SpeedsStore} />;
};

export default observer(CreateSpeed);
