import { observer } from "mobx-react-lite";

import { EmployeesStore } from "@entities/employee";
import { OrganizationsStore } from "@entities/organization";
import { PostsStore } from "@entities/post";
import { updateEmployee } from "@shared/assets";
import { getSelectOptions, getEmployeeDefaultValues } from "@shared/lib";
import { UpdateEmployee as UpdateEmployeeType, Employee } from "@shared/misc";
import { Update } from "@shared/ui";

interface Props {
  id?: string;
}

const UpdateEmployee = ({ id }: Props) => {
  const organizations = OrganizationsStore.organizations;
  const posts = PostsStore.posts;

  const form = updateEmployee(
    getSelectOptions(organizations),
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
