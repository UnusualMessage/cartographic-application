import { observer } from "mobx-react-lite";

import { OrganizationsStore, PostsStore } from "../../../stores/entities";
import { getSelectOptions } from "../../../utils/forms";
import { createPost } from "../../../assets/forms";
import { Create } from "../../auxiliary/forms/actions";

const CreatePost = () => {
  const organizations = OrganizationsStore.organizations;

  const form = createPost(getSelectOptions(organizations));

  return <Create name={"должность"} store={PostsStore} form={form} />;
};

export default observer(CreatePost);
