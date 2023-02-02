import { observer } from "mobx-react-lite";

import { createEmployee } from "../../../assets/templates/forms";
import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
} from "../../../stores/entities";
import { getSelectOptions } from "../../../utils/forms";
import { Create } from "../../auxiliary/forms/actions";

const CreateEmployee = () => {
  const organizations = OrganizationsStore.organizations;
  const posts = PostsStore.posts;

  const form = createEmployee(
    getSelectOptions(organizations),
    getSelectOptions(posts)
  );

  return <Create name={"сотрудник"} store={EmployeesStore} form={form} />;
};

export default observer(CreateEmployee);
