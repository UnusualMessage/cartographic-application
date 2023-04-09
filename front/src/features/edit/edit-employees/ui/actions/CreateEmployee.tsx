import { observer } from "mobx-react-lite";

import {
  EmployeesStore,
  PostsStore,
  DepartmentsStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { getEmployeeDefaultValues, employeeForm } from "../../model";

const CreateEmployee = () => {
  const departments = DepartmentsStore.departments;
  const posts = PostsStore.posts;

  const form = employeeForm(
    getSelectOptions(departments),
    getSelectOptions(posts)
  );

  return (
    <Create
      name={"сотрудник"}
      store={EmployeesStore}
      form={form}
      defaultValues={getEmployeeDefaultValues()}
    />
  );
};

export default observer(CreateEmployee);
