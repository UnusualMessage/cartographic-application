import { observer } from "mobx-react-lite";

import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { UpdateEmployee as UpdateEmployeeType, Employee } from "@shared/misc";
import { Update } from "@shared/ui";

import { getEmployeeDefaultValues, updateEmployee } from "../../model";

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
