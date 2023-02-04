import { observer } from "mobx-react-lite";

import { createTrailer } from "@shared/assets";
import { getSelectOptions } from "@shared/lib";

import {
  DepartmentsStore,
  OrganizationsStore,
  TrailersStore,
} from "../../../../entities/stores/entities";
import { Create } from "../../../../shared/ui/forms/actions";

const CreateTrailer = () => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  const form = createTrailer(
    getSelectOptions(organizations),
    getSelectOptions(departments)
  );

  return <Create name={"прицеп"} store={TrailersStore} form={form} />;
};

export default observer(CreateTrailer);
