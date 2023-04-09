import { observer } from "mobx-react-lite";

import { PostsStore, DepartmentsStore } from "@entities/business";
import { getSelectOptions } from "@shared/lib";
import { Create } from "@shared/ui";

import { getPostDefaultValues, postForm } from "../../model";

const CreatePost = () => {
  const departments = DepartmentsStore.departments;

  const form = postForm(getSelectOptions(departments));

  return (
    <Create
      name={"должность"}
      store={PostsStore}
      form={form}
      defaultValues={getPostDefaultValues()}
    />
  );
};

export default observer(CreatePost);
