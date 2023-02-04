import { observer } from "mobx-react-lite";

import { createEmployee } from "@shared/assets";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui/forms/actions";

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
