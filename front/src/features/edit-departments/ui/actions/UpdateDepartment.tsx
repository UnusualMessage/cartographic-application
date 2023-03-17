import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/department";
import { getSelectOptions } from "@shared/lib";
import {
  Department,
  UpdateDepartment as UpdateDepartmentType,
} from "@shared/misc";
import { Update } from "@shared/ui";

import { getDepartmentDefaultValues, updateDepartment } from "../../model";

interface Props {
  id?: string;
}

const UpdateDepartment = ({ id }: Props) => {
  const departments = DepartmentsStore.departments;

  const form = updateDepartment(getSelectOptions(departments));

  return (
    <Update<Department, UpdateDepartmentType>
      name={"подразделение"}
      store={DepartmentsStore}
      form={form}
      id={id}
      getDefaultValues={getDepartmentDefaultValues}
    />
  );
};

export default observer(UpdateDepartment);
