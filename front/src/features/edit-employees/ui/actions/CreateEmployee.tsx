import { observer } from "mobx-react-lite";

import { EmployeesStore } from "@entities/employee";
import { OrganizationsStore } from "@entities/organization";
import { PostsStore } from "@entities/post";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createEmployee } from "../../model";

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
