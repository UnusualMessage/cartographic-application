import { observer } from "mobx-react-lite";

import { createTrailer } from "@shared/assets";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { DepartmentsStore } from "../../../department";
import { OrganizationsStore } from "../../../organization";
import { TrailersStore } from "../../model";

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