import { observer } from "mobx-react-lite";

import {
  OrganizationsStore,
  DepartmentsStore,
  EquipmentTypesStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createEquipmentType } from "../../model";

const CreateEquipmentType = () => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  const form = createEquipmentType(
    getSelectOptions(organizations),
    getSelectOptions(departments)
  );

  return (
    <Create name={"тип техники"} store={EquipmentTypesStore} form={form} />
  );
};

export default observer(CreateEquipmentType);
