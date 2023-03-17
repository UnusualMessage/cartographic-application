import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "@entities/organization";
import { PostsStore } from "@entities/post";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { createPost } from "../../model";

const CreatePost = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPost(getSelectOptions(organizations));

  return <Create name={"должность"} store={PostsStore} form={form} />;
};

export default observer(CreatePost);