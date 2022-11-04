import { Icon } from "@blueprintjs/core";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/DialogForm";
import { TextInput } from "../../inputs";
import { OrganizationsStore, PostsStore } from "../../../stores/entities";
import SelectInput from "../../inputs/SelectInput";
import { CreatePost } from "../../../types/entities/Post";

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
      text={"Создать"}
      icon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      <TextInput
        label={"Название"}
        invalid={!!errors.title}
        message={errors.title?.message}
        required
        {...register("title", { required: "Заполните поле!" })}
      />
      <TextInput
        label={"Номер"}
        invalid={!!errors.number}
        message={errors.number?.message}
        {...register("number")}
      />
      <SelectInput
        options={organizations.map((organization) => {
          return {
            label: organization.title,
            value: organization.id,
          };
        })}
        label={"Организация"}
        invalid={!!errors.organizationId}
        message={errors.organizationId?.message}
        required
        {...register("organizationId", { required: "Заполните поле!" })}
      />
    </DialogForm>
  );
};

export default CreatePost;
