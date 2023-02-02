import { observer } from "mobx-react-lite";

import {
  DepartmentsStore,
  OrganizationsStore,
  TrailersStore,
} from "../../../stores/entities";
import { getSelectOptions } from "../../../utils/forms";
import { createTrailer } from "../../../assets/forms";
import { Create } from "../../auxiliary/forms/actions";

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
