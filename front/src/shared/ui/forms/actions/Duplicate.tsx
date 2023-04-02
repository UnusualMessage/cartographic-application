import { CopyOutlined } from "@ant-design/icons";
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

const Duplicate = <T extends Entity>({ id, name, store }: Props<T>) => {
  const [successful, setSuccessful] = useState(false);

  const handleDuplicate = async () => {
    if (id) {
      await store.duplicate(id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={`Дублирование записи (${name})`}
      buttonText={"Дублировать"}
      buttonIcon={<CopyOutlined />}
      buttonDisabled={!id}
      onAccept={id ? handleDuplicate : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      Подтвердите дублирование записи
    </DialogForm>
  );
};

export default Duplicate;
