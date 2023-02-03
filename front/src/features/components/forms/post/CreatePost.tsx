import { observer } from "mobx-react-lite";

import {
  OrganizationsStore,
  PostsStore,
} from "../../../../entities/stores/entities";
import { getSelectOptions } from "@shared/lib";
import { createPost } from "@shared/assets";
import { Create } from "../../auxiliary/forms/actions";

const CreatePost = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPost(getSelectOptions(organizations));

  return <Create name={"должность"} store={PostsStore} form={form} />;
};

export default observer(CreatePost);
