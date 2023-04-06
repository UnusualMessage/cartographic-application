import { observer } from "mobx-react-lite";

import {
  EmployeesStore,
  PostsStore,
  DepartmentsStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { UpdateEmployee as UpdateEmployeeType, Employee } from "@shared/misc";
import { Update } from "@shared/ui";

import { getEmployeeDefaultValues, employeeForm } from "../../model";

interface Props {
  id?: string;
}

const UpdateEmployee = ({ id }: Props) => {
  const departments = DepartmentsStore.departments;
  const posts = PostsStore.posts;

  const form = employeeForm(
    getSelectOptions(departments),
    getSelectOptions(posts)
  );

  return (
    <Update<Employee, UpdateEmployeeType>
      name={"сотрудник"}
      store={EmployeesStore}
      form={form}
      id={id}
      getDefaultValues={getEmployeeDefaultValues}
    />
  );
};

export default observer(UpdateEmployee);
