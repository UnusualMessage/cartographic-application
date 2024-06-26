import { observer } from "mobx-react-lite";

import { DepartmentsStore, EquipmentTypesStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { EquipmentType, UpdateEquipmentType } from "@shared/misc";
import { Update } from "@shared/ui";

import { getEquipmentTypeDefaultValues, equipmentTypeForm } from "../../model";

interface Props {
  id?: string;
}

const UpdateEquipmentType = ({ id }: Props) => {
  const departments = DepartmentsStore.departments;

  const form = equipmentTypeForm(getSelectOptions(departments));

  return (
    <Update<EquipmentType, UpdateEquipmentType>
      name={"тип техники"}
      store={EquipmentTypesStore}
      form={form}
      id={id}
      getDefaultValues={getEquipmentTypeDefaultValues}
    />
  );
};

export default observer(UpdateEquipmentType);
