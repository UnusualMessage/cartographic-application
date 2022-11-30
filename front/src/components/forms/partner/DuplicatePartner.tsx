import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";
import { useState } from "react";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { useFetch } from "../../../hooks";
import Partner from "../../../types/entities/Partner";
import PartnersStore from "../../../stores/entities/PartnersStore";

interface Props {
  id?: string;
}

const DuplicatePartner = ({ id }: Props) => {
  const [partner, setPartner] = useState<Partner | undefined>(undefined);
  const [successful, setSuccessful] = useState(false);

  useFetch(async () => {
    if (id) {
      setPartner(await PartnersStore.getById(id));
    }
  }, [id]);

  const handleDuplicate = async () => {
    if (partner) {
      await PartnersStore.duplicate(partner.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Дублирование записи (контрагент)"}
      buttonText={"Дублировать"}
      buttonIcon={<Icon icon={"duplicate"} />}
      buttonDisabled={!id}
      onAccept={id ? handleDuplicate : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите дублирование записи ${partner?.title} - ${partner?.id}`}
    </DialogForm>
  );
};

export default observer(DuplicatePartner);
