import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/department";
import { OrganizationsStore } from "@entities/organization";
import { TrailersStore } from "@entities/trailer";
import { updateTrailer } from "@shared/assets";
import { getSelectOptions } from "@shared/lib";
import { Trailer, UpdateTrailer as UpdateTrailerType } from "@shared/misc";
import { Update } from "@shared/ui";

import { getTrailerDefaultValues } from "../../model";

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
