import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "../../../../entities/stores/entities";
import { getSelectOptions } from "@shared/lib";
import DepartmentsStore from "../../../../entities/stores/entities/DepartmentsStore";
import { createDepartment } from "@shared/assets";
import { Create } from "../../auxiliary/forms/actions";

const CreateDepartment = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createDepartment(getSelectOptions(organizations));

  return <Create name={"подразделение"} form={form} store={DepartmentsStore} />;
};

export default observer(CreateDepartment);
