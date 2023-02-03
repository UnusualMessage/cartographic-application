import { observer } from "mobx-react-lite";

import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
} from "../../../../entities/stores/entities";
import { createEmployee } from "../../../../shared/assets/templates/forms";
import { Create } from "../../auxiliary/forms/actions";
import { getSelectOptions } from "../../../../shared/lib/utils/forms";

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
