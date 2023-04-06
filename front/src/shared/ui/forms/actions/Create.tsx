import { PlusCircleOutlined } from "@ant-design/icons";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Control,
  DeepPartial,
} from "react-hook-form";

import { formRenderer } from "../../../lib";
import type { ApiStore, Form } from "../../../misc";
import DialogForm from "../DialogForm";

interface Props<T, CreateT> {
  name: string;
  store: ApiStore<T, CreateT, any>;
  form: Form<CreateT>;
  defaultValues: DeepPartial<CreateT>;
}

const Create = <T, CreateT extends FieldValues>({
  name,
  store,
  form,
  defaultValues,
}: Props<T, CreateT>) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful },
  } = useForm<CreateT>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<CreateT> = async (data) => {
    await store.add(data);
    reset();
  };

  const onDeny = () => {
    reset();
  };

  return (
    <DialogForm
      title={`Создание записи (${name})`}
      buttonText={"Создать"}
      buttonIcon={<PlusCircleOutlined />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      {formRenderer(form, control as Control)}
    </DialogForm>
  );
};
export default Create;
