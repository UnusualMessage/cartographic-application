import { observer } from "mobx-react-lite";

import {
  OrganizationsStore,
  DepartmentsStore,
  MountedsStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createMounted } from "../../model";

const CreateMounted = () => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  const form = createMounted(
    getSelectOptions(organizations),
    getSelectOptions(departments)
  );

  return <Create name={"навесной агрегат"} store={MountedsStore} form={form} />;
};

export default observer(CreateMounted);
