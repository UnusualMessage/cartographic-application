import { observer } from "mobx-react-lite";

import { DepartmentsStore, GeozonesStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { UpdateGeozone, Geozone } from "@shared/misc";
import { Update } from "@shared/ui";

import { geozoneForm, getGeozoneDefaultValues } from "../../model";

interface Props {
  id?: string;
}

const UpdateGeozone = ({ id }: Props) => {
  const departments = DepartmentsStore.departments;

  const form = geozoneForm(getSelectOptions(departments));

  return (
    <Update<Geozone, UpdateGeozone>
      name={"геозона"}
      store={GeozonesStore}
      form={form}
      id={id}
      getDefaultValues={getGeozoneDefaultValues}
    />
  );
};

export default observer(UpdateGeozone);
