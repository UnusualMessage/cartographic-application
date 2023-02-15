import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { updatePost } from "@shared/assets";
import { useFetch, formRenderer, getSelectOptions } from "@shared/lib";
import { Post, UpdatePost as UpdatePostType } from "@shared/misc";
import { DialogForm } from "@shared/ui";

import { OrganizationsStore } from "../../../organization";
import { PostsStore } from "../../model";

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
  } = useForm<UpdatePostType>({
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

  const onSubmit: SubmitHandler<UpdatePostType> = async (data) => {
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
