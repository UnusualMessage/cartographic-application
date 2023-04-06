import { observer } from "mobx-react-lite";

import { DepartmentsStore, TrailersStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createTrailer, getTrailerDefaultValues } from "../../model";

const CreateTrailer = () => {
  const departments = DepartmentsStore.departments;

  const form = createTrailer(getSelectOptions(departments));

  return (
    <Create
      name={"прицеп"}
      store={TrailersStore}
      form={form}
      defaultValues={getTrailerDefaultValues()}
    />
  );
};

export default observer(CreateTrailer);
