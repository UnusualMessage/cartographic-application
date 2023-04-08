import { observer } from "mobx-react-lite";

import { DepartmentsStore, MountedsStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { getMountedDefaultValues, mountedForm } from "../../model";

const CreateMounted = () => {
  const departments = DepartmentsStore.departments;

  const form = mountedForm(getSelectOptions(departments));

  return (
    <Create
      name={"навесной агрегат"}
      store={MountedsStore}
      form={form}
      defaultValues={getMountedDefaultValues()}
    />
  );
};

export default observer(CreateMounted);
