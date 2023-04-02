import { EditOutlined } from "@ant-design/icons";
import { useState, useMemo } from "react";
import {
  DeepPartial,
  FieldValues,
  SubmitHandler,
  useForm,
  Control,
} from "react-hook-form";

import { useFetch, formRenderer } from "../../../lib";
import type { ApiStore, Form } from "../../../misc";
import DialogForm from "../DialogForm";

interface Entity {
  id: string;
}

interface Props<T, UpdateT> {
  name: string;
  store: ApiStore<T, any, UpdateT>;
  id?: string;
  getDefaultValues: (entity?: T) => DeepPartial<UpdateT>;
  form: Form<UpdateT>;
}

const Update = <T extends Entity, UpdateT extends FieldValues>({
  name,
  store,
  id,
  getDefaultValues,
  form,
}: Props<T, UpdateT>) => {
  const [successful, setSuccessful] = useState(false);
  const [entity, setEntity] = useState<T>();

  const { control, reset, handleSubmit } = useForm<UpdateT>({
    defaultValues: useMemo(() => {
      return getDefaultValues(entity);
    }, [entity]),
  });

  useFetch(async () => {
    console.log("fetch");
    if (id) {
      const data = store.getById(id);
      setEntity(data);
      reset(getDefaultValues(data));
    }
  }, [id]);

  const onSubmit: SubmitHandler<UpdateT> = async (data) => {
    store.update(data);
    setSuccessful(true);
  };

  return (
    <DialogForm
      title={`Редактирование записи (${name})`}
      buttonText={"Редактировать"}
      buttonIcon={<EditOutlined />}
      buttonDisabled={!id}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      setSuccessful={setSuccessful}
      successful={successful}
    >
      {formRenderer(form, control as Control)}
    </DialogForm>
  );
};

export default Update;
