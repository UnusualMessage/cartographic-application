import { observer } from "mobx-react-lite";

import { DepartmentsStore, EquipmentTypesStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { getEquipmentTypeDefaultValues, equipmentTypeForm } from "../../model";

const CreateEquipmentType = () => {
  const departments = DepartmentsStore.departments;

  const form = equipmentTypeForm(getSelectOptions(departments));

  return (
    <Create
      name={"тип техники"}
      store={EquipmentTypesStore}
      form={form}
      defaultValues={getEquipmentTypeDefaultValues()}
    />
  );
};

export default observer(CreateEquipmentType);
