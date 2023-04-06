import { observer } from "mobx-react-lite";

import { SpeedsStore, DepartmentsStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { getSpeedDefaultValues, speedForm } from "../../model";

const CreateSpeed = () => {
  const departments = DepartmentsStore.departments;

  const form = speedForm(getSelectOptions(departments));

  return (
    <Create
      name={"скоростной режим"}
      form={form}
      store={SpeedsStore}
      defaultValues={getSpeedDefaultValues()}
    />
  );
};

export default observer(CreateSpeed);
