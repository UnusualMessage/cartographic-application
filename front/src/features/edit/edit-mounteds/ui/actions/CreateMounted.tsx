import { observer } from "mobx-react-lite";

import { DepartmentsStore, MountedsStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createMounted, getMountedDefaultValues } from "../../model";

const CreateMounted = () => {
  const departments = DepartmentsStore.departments;

  const form = createMounted(getSelectOptions(departments));

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
