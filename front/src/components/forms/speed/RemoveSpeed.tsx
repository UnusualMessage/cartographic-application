import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { useFetch } from "../../../hooks";
import { Speed } from "../../../types/entities";
import SpeedsStore from "../../../stores/entities/SpeedsStore";

interface Props {
  id?: string;
}

const RemoveSpeed = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [speed, setSpeed] = useState<Speed | undefined>(undefined);

  useFetch(async () => {
    if (id) {
      setSpeed(await SpeedsStore.getById(id));
    }
  }, [id]);

  const handleRemove = async () => {
    if (speed) {
      await SpeedsStore.remove(speed.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Удаление записи (скоростной режим)"}
      buttonText={"Удалить"}
      buttonIcon={<Icon icon={"remove"} />}
      buttonDisabled={!id}
      onAccept={id ? handleRemove : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите удаление записи ${speed?.title} - ${speed?.id}`}
    </DialogForm>
  );
};

export default observer(RemoveSpeed);
