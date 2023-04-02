import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/department";
import { OrganizationsStore } from "@entities/organization";
import { TrailersStore } from "@entities/trailer";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createTrailer } from "../../model";

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
