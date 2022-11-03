import { Icon } from "@blueprintjs/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

import DialogForm from "../../auxiliary/DialogForm";
import { TextInput } from "../../inputs";
import { Post } from "../../../types/entities";
import { PostsStore } from "../../../stores/entities";
import { organizations } from "../../../assets/data";

const CreatePost = () => {
  const { control, handleSubmit } = useForm<Post>({
    defaultValues: {
      title: "",
      number: "",
    },
  });

  const onSubmit: SubmitHandler<Post> = async (data) => {
    data.organization = organizations[0];
    data.id = uuid();
    await PostsStore.add(data);
  };

  return (
    <DialogForm
      title={"Создание записи (должность)"}
      text={"Создать"}
      icon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
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

export default CreatePost;
