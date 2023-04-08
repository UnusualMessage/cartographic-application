import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/business";
import { Create } from "@shared/ui";

import { getDepartmentDefaultValues, departmentForm } from "../../model";

const CreateDepartment = () => {
  return (
    <Create
      name={"подразделение"}
      form={departmentForm()}
      store={DepartmentsStore}
      defaultValues={getDepartmentDefaultValues()}
    />
  );
};

export default observer(CreateDepartment);
