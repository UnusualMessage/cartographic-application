import { observer } from "mobx-react-lite";

import { DepartmentsStore, MountedsStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Mounted, UpdateMounted } from "@shared/misc";
import { Update } from "@shared/ui";

import { getMountedDefaultValues, mountedForm } from "../../model";

interface Props {
  id?: string;
}

const UpdateMounted = ({ id }: Props) => {
  const departments = DepartmentsStore.departments;

  const form = mountedForm(getSelectOptions(departments));

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
