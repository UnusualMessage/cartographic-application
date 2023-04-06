import { observer } from "mobx-react-lite";

import {
  OrganizationsStore,
  DepartmentsStore,
  MountedsStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Mounted, UpdateMounted } from "@shared/misc";
import { Update } from "@shared/ui";

import { updateMounted, getMountedDefaultValues } from "../../model";

interface Props {
  id?: string;
}

const UpdateMounted = ({ id }: Props) => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  const form = updateMounted(
    getSelectOptions(organizations),
    getSelectOptions(departments)
  );

  return (
    <Update<Mounted, UpdateMounted>
      name={"навесной агрегат"}
      store={MountedsStore}
      form={form}
      id={id}
      getDefaultValues={getMountedDefaultValues}
    />
  );
};

export default observer(UpdateMounted);
