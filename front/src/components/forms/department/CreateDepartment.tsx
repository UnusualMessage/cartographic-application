import { observer } from "mobx-react-lite";

import { createDepartment } from "../../../assets/templates/forms";
import { OrganizationsStore } from "../../../stores/entities";
import DepartmentsStore from "../../../stores/entities/DepartmentsStore";
import { getSelectOptions } from "../../../utils/forms";
import { Create } from "../../auxiliary/forms/actions";

const CreateDepartment = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createDepartment(getSelectOptions(organizations));

  return <Create name={"подразделение"} form={form} store={DepartmentsStore} />;
};

export default observer(CreateDepartment);
