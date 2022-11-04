import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/DialogForm";
import { PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { TextInput } from "../../inputs";
import { Post } from "../../../types/entities";

interface Props {
  id?: string;
}

const UpdatePost = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [post, setPost] = useState<Post | undefined>(undefined);

  const { register, reset, handleSubmit } = useForm<Post>({
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
      setPost(post);
      reset(post);
    }
  }, [id]);

  const onSubmit: SubmitHandler<Post> = async (data) => {
    await PostsStore.update(data);
    setSuccessful(true);
  };

  return (
    <DialogForm
      title={"Редактирование должности"}
      text={"Редактировать"}
      icon={<Icon icon={"edit"} />}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      disabled={!id}
      successful={successful}
    >
      <TextInput label={"Название"} required {...register("title")} />
      <TextInput label={"Номер"} required {...register("number")} />
    </DialogForm>
  );
};

export default observer(UpdatePost);
