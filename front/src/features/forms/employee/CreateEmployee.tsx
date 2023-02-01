import { observer } from "mobx-react-lite";

import { Create } from "../../../components/auxiliary/forms/actions";
import { createEmployee } from "../../../shared/assets/templates/forms";
import { getSelectOptions } from "../../../shared/lib/utils/forms";
import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
} from "../../../stores/entities";

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
