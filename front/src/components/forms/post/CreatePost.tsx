import { Icon } from "@blueprintjs/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import DialogForm from "../../auxiliary/DialogForm";
import { OrganizationsStore, PostsStore } from "../../../stores/entities";
import { CreatePost } from "../../../types/entities/Post";
import { formRenderer, getSelectOptions } from "../../../utils/forms";
import { createPost } from "../../../assets/forms";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CreatePost>({
    defaultValues: {
      title: "",
      number: "",
      organizationId: "",
    },
  });

  const onSubmit: SubmitHandler<CreatePost> = async (data) => {
    await PostsStore.add(data);
    reset();
  };

  const onDeny = () => {
    reset();
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Создание записи (должность)"}
      buttonText={"Создать"}
      buttonIcon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      {formRenderer(
        createPost(getSelectOptions(organizations)),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(CreatePost);
