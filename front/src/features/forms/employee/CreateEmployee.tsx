import { observer } from "mobx-react-lite";

import { createEmployee } from "../../../assets/templates/forms";
import { Create } from "../../../components/auxiliary/forms/actions";
import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
} from "../../../stores/entities";
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
