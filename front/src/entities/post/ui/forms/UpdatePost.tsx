import { EditOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm, Control } from "react-hook-form";

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
  const [post, setPost] = useState<Post>();

  const { reset, handleSubmit, control } = useForm<UpdatePostType>({
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

      const defaultValues: Partial<UpdatePostType> = {
        id: post?.id,
        title: post?.title,
        organizationId: post?.organization.id,
      };

      reset(defaultValues);
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
      buttonIcon={<EditOutlined />}
      buttonDisabled={!id}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {formRenderer(
        updatePost(getSelectOptions(organizations)),
        control as unknown as Control
      )}
    </DialogForm>
  );
};

export default observer(UpdatePost);
