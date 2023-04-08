import { observer } from "mobx-react-lite";

import {
  DepartmentsStore,
  EquipmentTypesStore,
  EquipmentStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { UpdateEquipment, Equipment } from "@shared/misc";
import { Update } from "@shared/ui";

import { equipmentForm, getEquipmentDefaultValues } from "../../model";

interface Props {
  id?: string;
}

const UpdateEquipment = ({ id }: Props) => {
  const departments = DepartmentsStore.departments;
  const types = EquipmentTypesStore.types;

  const form = equipmentForm(
    getSelectOptions(departments),
    getSelectOptions(types)
  );

  return (
    <Update<Equipment, UpdateEquipment>
      name={"техника"}
      store={EquipmentStore}
      form={form}
      id={id}
      getDefaultValues={getEquipmentDefaultValues}
    />
  );
};

export default observer(UpdateEquipment);
