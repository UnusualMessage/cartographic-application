import { observer } from "mobx-react-lite";

import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
  DepartmentsStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createEmployee } from "../../model";

const CreateEmployee = () => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;
  const posts = PostsStore.posts;

  const form = createEmployee(
    getSelectOptions(organizations),
    getSelectOptions(departments),
    getSelectOptions(posts)
  );

  return <Create name={"сотрудник"} store={EmployeesStore} form={form} />;
};

export default observer(CreateEmployee);
