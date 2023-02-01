import { observer } from "mobx-react-lite";

import { createPost } from "../../../shared/assets/templates/forms";
import { getSelectOptions } from "../../../shared/lib/utils/forms";
import { OrganizationsStore, PostsStore } from "../../../stores/entities";
import { Create } from "../../auxiliary/forms/actions";

const CreatePost = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPost(getSelectOptions(organizations));

  return <Create name={"должность"} store={PostsStore} form={form} />;
};

export default observer(CreatePost);
