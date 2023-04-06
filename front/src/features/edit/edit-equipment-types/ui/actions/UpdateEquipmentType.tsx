import { observer } from "mobx-react-lite";

import {
  OrganizationsStore,
  DepartmentsStore,
  EquipmentTypesStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { EquipmentType, UpdateEquipmentType } from "@shared/misc";
import { Update } from "@shared/ui";

import {
  getEquipmentTypeDefaultValues,
  updateEquipmentType,
} from "../../model";

interface Props {
  id?: string;
}

const UpdateEquipmentType = ({ id }: Props) => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  const form = updateEquipmentType(
    getSelectOptions(organizations),
    getSelectOptions(departments)
  );

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
