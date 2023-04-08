import { observer } from "mobx-react-lite";

import { DepartmentsStore, GeozonesStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { getGeozoneDefaultValues, geozoneForm } from "../../model";

const CreateGeozone = () => {
  const departments = DepartmentsStore.departments;

  const form = geozoneForm(getSelectOptions(departments));

  return (
    <Create
      name={"геозона"}
      store={GeozonesStore}
      form={form}
      defaultValues={getGeozoneDefaultValues()}
    />
  );
};

export default observer(CreateGeozone);
