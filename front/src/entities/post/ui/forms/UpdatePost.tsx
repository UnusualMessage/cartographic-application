import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { OrganizationsStore } from "@entities/organization";
import { PostsStore } from "@entities/post/model";
import { updatePost } from "@shared/assets";
import { formRenderer, getSelectOptions, useFetch } from "@shared/lib";
import { Post } from "@shared/misc/types/entities";
import { UpdatePost } from "@shared/misc/types/entities/post";
import DialogForm from "@shared/ui/forms/DialogForm";

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
