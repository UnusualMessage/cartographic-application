import { observer } from "mobx-react-lite";

import { PartnersStore } from "@entities/partner";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemovePartner = ({ id }: Props) => {
  return <Remove name={"контрагент"} store={PartnersStore} id={id} />;
};

export default observer(RemovePartner);
