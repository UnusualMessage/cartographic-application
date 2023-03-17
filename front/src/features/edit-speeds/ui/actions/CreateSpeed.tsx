import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "@entities/organization";
import { SpeedsStore } from "@entities/speed";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createSpeed } from "../../model";

const CreateSpeed = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createSpeed(getSelectOptions(organizations));

  return <Create name={"скоростной режим"} form={form} store={SpeedsStore} />;
};

export default observer(CreateSpeed);
