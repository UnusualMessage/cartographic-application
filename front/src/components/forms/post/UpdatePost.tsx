import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/DialogForm";
import { PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { TextInput } from "../../inputs";
import { Post } from "../../../types/entities";

interface Props {
  id?: string;
}

const UpdatePost = ({ id }: Props) => {
  const post = PostsStore.post;

  const { control, reset, handleSubmit } = useForm<Post>({
    defaultValues: useMemo(() => {
      return {
        title: post?.title,
        number: post?.number,
      };
    }, [post]),
  });

  useFetch(async () => {
    if (id) {
      const post = await PostsStore.getById(id);
      reset(post);
    }
  }, [id]);

  const onSubmit: SubmitHandler<Post> = async (data) => {
    await PostsStore.update(data);
  };

  return (
    <DialogForm
      title={"Редактирование должности"}
      text={"Редактировать"}
      icon={<Icon icon={"edit"} />}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      disabled={!id}
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextInput label={"Название"} required {...field} />
        )}
      />

      <Controller
        name="number"
        control={control}
        render={({ field }) => (
          <TextInput label={"Номер"} required {...field} />
        )}
      />
    </DialogForm>
  );
};

export default observer(UpdatePost);
