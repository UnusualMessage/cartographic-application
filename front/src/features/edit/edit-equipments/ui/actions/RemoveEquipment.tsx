import { observer } from "mobx-react-lite";

import { EquipmentStore } from "@entities/business";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemoveEquipment = ({ id }: Props) => {
  return <Remove name={"техника"} store={EquipmentStore} id={id} />;
};

export default observer(RemoveEquipment);
