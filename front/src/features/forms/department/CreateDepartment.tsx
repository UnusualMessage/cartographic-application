import { observer } from "mobx-react-lite";

import { Create } from "../../../components/auxiliary/forms/actions";
import { createDepartment } from "../../../shared/assets/templates/forms";
import { getSelectOptions } from "../../../shared/lib/utils/forms";
import { OrganizationsStore } from "../../../stores/entities";
import DepartmentsStore from "../../../stores/entities/DepartmentsStore";

const CreateDepartment = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createDepartment(getSelectOptions(organizations));

  return <Create name={"подразделение"} form={form} store={DepartmentsStore} />;
};

export default observer(CreateDepartment);
