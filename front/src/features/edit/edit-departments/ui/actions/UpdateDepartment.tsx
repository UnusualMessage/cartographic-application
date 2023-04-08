import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/business";
import {
  Department,
  UpdateDepartment as UpdateDepartmentType,
} from "@shared/misc";
import { Update } from "@shared/ui";

import { getDepartmentDefaultValues, departmentForm } from "../../model";

interface Props {
  id?: string;
}

const UpdateDepartment = ({ id }: Props) => {
  return (
    <Update<Department, UpdateDepartmentType>
      name={"подразделение"}
      store={DepartmentsStore}
      form={departmentForm()}
      id={id}
      getDefaultValues={getDepartmentDefaultValues}
    />
  );
};

export default observer(UpdateDepartment);
