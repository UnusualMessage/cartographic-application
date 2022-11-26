import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { Speed } from "../../../types/entities";
import { useFetch } from "../../../hooks";
import DialogForm from "../../auxiliary/DialogForm";
import SpeedsStore from "../../../stores/entities/SpeedsStore";

interface Props {
  id?: string;
}

const DuplicateSpeed = ({ id }: Props) => {
  const [speed, setSpeed] = useState<Speed | undefined>(undefined);
  const [successful, setSuccessful] = useState(false);

  useFetch(async () => {
    if (id) {
      setSpeed(await SpeedsStore.getById(id));
    }
  }, [id]);

  const handleDuplicate = async () => {
    if (speed) {
      await SpeedsStore.duplicate(speed.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Дублирование записи (скоростной режим)"}
      buttonText={"Дублировать"}
      buttonIcon={<Icon icon={"duplicate"} />}
      buttonDisabled={!id}
      onAccept={id ? handleDuplicate : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите дублирование записи ${speed?.title} - ${speed?.id}`}
    </DialogForm>
  );
};

export default observer(DuplicateSpeed);
