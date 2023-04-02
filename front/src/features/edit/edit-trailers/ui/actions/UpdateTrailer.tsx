import { observer } from "mobx-react-lite";

import {
  DepartmentsStore,
  OrganizationsStore,
  TrailersStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Trailer, UpdateTrailer as UpdateTrailerType } from "@shared/misc";
import { Update } from "@shared/ui";

import { getTrailerDefaultValues, updateTrailer } from "../../model";

interface Props {
  id?: string;
}

const UpdateTrailer = ({ id }: Props) => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  const form = updateTrailer(
    getSelectOptions(organizations),
    getSelectOptions(departments)
  );

  return (
    <Update<Trailer, UpdateTrailerType>
      name={"прицеп"}
      store={TrailersStore}
      form={form}
      id={id}
      getDefaultValues={getTrailerDefaultValues}
    />
  );
};

export default observer(UpdateTrailer);
