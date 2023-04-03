import { observer } from "mobx-react-lite";

import { OrganizationsStore, PostsStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Post, UpdatePost as UpdatePostType } from "@shared/misc";
import { Update } from "@shared/ui";

import { getPostDefaultValues, updatePost } from "../../model";

interface Props {
  id?: string;
}

const UpdatePost = ({ id }: Props) => {
  const organizations = OrganizationsStore.organizations;

  const form = updatePost(getSelectOptions(organizations));

  return (
    <Update<Post, UpdatePostType>
      name={"должность"}
      store={PostsStore}
      form={form}
      id={id}
      getDefaultValues={getPostDefaultValues}
    />
  );
};

export default observer(UpdatePost);
