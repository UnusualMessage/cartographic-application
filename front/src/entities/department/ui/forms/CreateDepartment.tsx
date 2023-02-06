import { observer } from "mobx-react-lite";

import { createDepartment } from "@shared/assets/templates/forms/department";
import { getSelectOptions } from "@shared/lib/utils/forms/getSelectOptions";
import Create from "@shared/ui/forms/actions/Create";

import { OrganizationsStore } from "../../../stores/entities";
import DepartmentsStore from "../../model/DepartmentsStore";

const CreateDepartment = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createDepartment(getSelectOptions(organizations));

  return <Create name={"подразделение"} form={form} store={DepartmentsStore} />;
};

export default observer(CreateDepartment);
