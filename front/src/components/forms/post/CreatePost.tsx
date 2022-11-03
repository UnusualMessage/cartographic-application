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
    formState: { errors },
  } = useForm<CreatePost>({
    defaultValues: {
      title: "",
      number: "",
      organizationId: "",
    },
  });

  const onSubmit: SubmitHandler<CreatePost> = async (data) => {
    await PostsStore.add(data);
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Создание записи (должность)"}
      text={"Создать"}
      icon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
    >
      <TextInput
        label={"Название"}
        invalid={!!errors.title}
        required
        {...register("title", { required: true })}
      />
      <TextInput
        label={"Номер"}
        {...register("number")}
        invalid={!!errors.number}
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
        required
        {...register("organizationId", { required: true })}
      />
    </DialogForm>
  );
};

export default CreatePost;
