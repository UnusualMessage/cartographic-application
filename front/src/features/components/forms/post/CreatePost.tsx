import { observer } from "mobx-react-lite";

import { createPost } from "@shared/assets";
import { getSelectOptions } from "@shared/lib";

import {
  OrganizationsStore,
  PostsStore,
} from "../../../../entities/stores/entities";
import { Create } from "../../../../shared/ui/forms/actions";

const CreatePost = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPost(getSelectOptions(organizations));

  return <Create name={"должность"} store={PostsStore} form={form} />;
};

export default observer(CreatePost);
