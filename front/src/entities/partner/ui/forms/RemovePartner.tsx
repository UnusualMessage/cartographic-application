import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui";

import { PartnersStore } from "../../model";

interface Props {
  id?: string;
}

const RemovePartner = ({ id }: Props) => {
  return <Remove name={"контрагент"} store={PartnersStore} id={id} />;
};

export default observer(RemovePartner);
