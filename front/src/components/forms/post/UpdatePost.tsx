import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { OrganizationsStore, PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { Post } from "../../../types/entities";
import { UpdatePost } from "../../../types/entities/Post";
import { formRenderer, getSelectOptions } from "../../../utils/forms";
import { updatePost } from "../../../assets/forms";

interface Props {
  id?: string;
}

const UpdatePost = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [post, setPost] = useState<Post | undefined>(undefined);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdatePost>({
    defaultValues: useMemo(() => {
      return {
        title: post?.title,
        organizationId: post?.organization.id,
      };
    }, [post]),
  });

  useFetch(async () => {
    if (id) {
      const post = await PostsStore.getById(id);
      setPost(post);
      reset(post);
    }
  }, [id]);

  const onSubmit: SubmitHandler<UpdatePost> = async (data) => {
    await PostsStore.update(data);
    setSuccessful(true);
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Редактирование записи (должность)"}
      buttonText={"Редактировать"}
      buttonIcon={<Icon icon={"edit"} />}
      buttonDisabled={!id}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {formRenderer(
        updatePost(getSelectOptions(organizations)),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(UpdatePost);
