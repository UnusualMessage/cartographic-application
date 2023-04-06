import { observer } from "mobx-react-lite";

import {
  OrganizationsStore,
  PostsStore,
  DepartmentsStore,
} from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createPost } from "../../model";

const CreatePost = () => {
  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  const form = createPost(
    getSelectOptions(organizations),
    getSelectOptions(departments)
  );

  return <Create name={"должность"} store={PostsStore} form={form} />;
};

export default observer(CreatePost);
