import { observer } from "mobx-react-lite";

import { SpeedsStore, DepartmentsStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { UpdateSpeed as UpdateSpeedType, Speed } from "@shared/misc";
import { Update } from "@shared/ui";

import { getSpeedDefaultValues, updateSpeed } from "../../model";

interface Props {
  id?: string;
}

const UpdateSpeed = ({ id }: Props) => {
  const departments = DepartmentsStore.departments;

  const form = updateSpeed(getSelectOptions(departments));

  return (
    <Update<Speed, UpdateSpeedType>
      name={"скоростной режим"}
      store={SpeedsStore}
      form={form}
      id={id}
      getDefaultValues={getSpeedDefaultValues}
    />
  );
};

export default observer(UpdateSpeed);
