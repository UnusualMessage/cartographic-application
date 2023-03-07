import { observer } from "mobx-react-lite";

import { updateDepartment } from "@shared/assets";
import { getSelectOptions, getDepartmentDefaultValues } from "@shared/lib";
import {
  Department,
  UpdateDepartment as UpdateDepartmentType,
} from "@shared/misc";
import { Update } from "@shared/ui";

import { DepartmentsStore } from "../../model";

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
