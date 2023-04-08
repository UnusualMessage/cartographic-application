import { observer } from "mobx-react-lite";

import {
  DepartmentsStore,
  EquipmentTypesStore,
  EquipmentStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { equipmentForm, getEquipmentDefaultValues } from "../../model";

const CreateEquipment = () => {
  const departments = DepartmentsStore.departments;
  const types = EquipmentTypesStore.types;

  const form = equipmentForm(
    getSelectOptions(departments),
    getSelectOptions(types)
  );

  return (
    <Create
      name={"техника"}
      store={EquipmentStore}
      form={form}
      defaultValues={getEquipmentDefaultValues()}
    />
  );
};

export default observer(CreateEquipment);
