import { observer } from "mobx-react-lite";

import {
  OrganizationsStore,
  SpeedsStore,
  DepartmentsStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createSpeed } from "../../model";

const CreateSpeed = () => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  const form = createSpeed(
    getSelectOptions(organizations),
    getSelectOptions(departments)
  );

  return <Create name={"скоростной режим"} form={form} store={SpeedsStore} />;
};

export default observer(CreateSpeed);
