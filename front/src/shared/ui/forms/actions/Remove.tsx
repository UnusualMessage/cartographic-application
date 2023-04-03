import { MinusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

import type { ApiStore } from "../../../misc";
import DialogForm from "../DialogForm";

interface Entity {
  id: string;
}

interface Props<T> {
  id?: string;
  name: string;
  store: ApiStore<T, any, any>;
}

const Remove = <T extends Entity>({ id, name, store }: Props<T>) => {
  const [successful, setSuccessful] = useState(false);

  const handleRemove = async () => {
    if (id) {
      await store.remove(id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={`Удаление записи (${name})`}
      buttonText={"Удалить"}
      buttonIcon={<MinusCircleOutlined />}
      buttonDisabled={!id}
      onAccept={id ? handleRemove : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      Подтвердите удаление записи
    </DialogForm>
  );
};

export default Remove;
