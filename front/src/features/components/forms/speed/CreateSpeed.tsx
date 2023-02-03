import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "../../../../entities/stores/entities";
import { getSelectOptions } from "../../../../shared/lib/utils/forms";
import { createSpeed } from "../../../../shared/assets";
import SpeedsStore from "../../../../entities/stores/entities/SpeedsStore";
import { Create } from "../../auxiliary/forms/actions";

const CreateSpeed = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createSpeed(getSelectOptions(organizations));

  return <Create name={"скоростной режим"} form={form} store={SpeedsStore} />;
};

export default observer(CreateSpeed);
