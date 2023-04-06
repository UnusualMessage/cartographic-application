import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/business";
import { Create } from "@shared/ui";

import { createDepartment, getDepartmentDefaultValues } from "../../model";

const CreateDepartment = () => {
  const form = createDepartment();

  return (
    <Create
      name={"подразделение"}
      form={form}
      store={DepartmentsStore}
      defaultValues={getDepartmentDefaultValues()}
    />
  );
};

export default observer(CreateDepartment);
