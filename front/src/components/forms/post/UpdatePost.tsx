import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/DialogForm";
import { OrganizationsStore, PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { SelectInput, TextInput } from "../../inputs";
import { Post } from "../../../types/entities";
import { UpdatePost } from "../../../types/entities/Post";

interface Props {
  id?: string;
}

const UpdatePost = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [post, setPost] = useState<Post | undefined>(undefined);
  const organizations = OrganizationsStore.organizations;

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdatePost>({
    defaultValues: useMemo(() => {
      return {
        title: post?.title,
        number: post?.number,
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

export default observer(UpdatePost);
