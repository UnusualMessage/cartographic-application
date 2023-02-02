import { observer } from "mobx-react-lite";

import { createSpeed } from "../../../assets/templates/forms";
import { OrganizationsStore } from "../../../stores/entities";
import SpeedsStore from "../../../stores/entities/SpeedsStore";
import { getSelectOptions } from "../../../utils/forms";
import { Create } from "../../auxiliary/forms/actions";

const CreateSpeed = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createSpeed(getSelectOptions(organizations));

  return <Create name={"скоростной режим"} form={form} store={SpeedsStore} />;
};

export default observer(CreateSpeed);
