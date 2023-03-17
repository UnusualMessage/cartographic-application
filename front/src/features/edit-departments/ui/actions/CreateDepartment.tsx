import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/department";
import { OrganizationsStore } from "@entities/organization";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createDepartment } from "../../model";

const CreateDepartment = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createDepartment(getSelectOptions(organizations));

  return <Create name={"подразделение"} form={form} store={DepartmentsStore} />;
};

export default observer(CreateDepartment);