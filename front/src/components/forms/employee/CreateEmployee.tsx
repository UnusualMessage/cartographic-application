import { observer } from "mobx-react-lite";

import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
} from "../../../stores/entities";
import { createEmployee } from "../../../assets/forms";
import { Create } from "../../auxiliary/forms/actions";
import { getSelectOptions } from "../../../utils/forms";

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
