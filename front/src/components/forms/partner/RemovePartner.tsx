import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import DialogForm from "../../auxiliary/DialogForm";
import { useFetch } from "../../../hooks";
import { Partner } from "../../../types/entities";
import PartnersStore from "../../../stores/entities/PartnersStore";

interface Props {
  id?: string;
}

const RemovePartner = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [partner, setPartner] = useState<Partner | undefined>(undefined);

  useFetch(async () => {
    if (id) {
      setPartner(await PartnersStore.getById(id));
    }
  }, [id]);

  const handleRemove = async () => {
    if (partner) {
      await PartnersStore.remove(partner.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Удаление записи (контрагент)"}
      buttonText={"Удалить"}
      buttonIcon={<Icon icon={"remove"} />}
      buttonDisabled={!id}
      onAccept={id ? handleRemove : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите удаление записи ${partner?.title} - ${partner?.id}`}
    </DialogForm>
  );
};

export default observer(RemovePartner);
