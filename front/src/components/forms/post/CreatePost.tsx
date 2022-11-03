import { Icon } from "@blueprintjs/core";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/DialogForm";
import { TextInput } from "../../inputs";
import { PostsStore } from "../../../stores/entities";
import { organizations } from "../../../assets/data";
import SelectInput from "../../inputs/SelectInput";
import { CreatePost } from "../../../types/entities/Post";

const CreatePost = () => {
  const { register, handleSubmit } = useForm<CreatePost>({
    defaultValues: {
      title: "",
      number: "",
      organizationId: "",
    },
  });

  const onSubmit: SubmitHandler<CreatePost> = async (data) => {
    await PostsStore.add(data);
  };

  return (
    <DialogForm
      title={"Создание записи (должность)"}
      text={"Создать"}
      icon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
    >
      <TextInput label={"Название"} required {...register("title")} />
      <TextInput label={"Номер"} required {...register("number")} />
      <SelectInput
        options={organizations.map((organization) => {
          return {
            label: organization.title,
            value: organization.id,
          };
        })}
        label={"Организация"}
        {...register("organizationId")}
      />
    </DialogForm>
  );
};

export default CreatePost;
