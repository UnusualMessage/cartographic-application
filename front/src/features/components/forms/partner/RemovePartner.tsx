import { observer } from "mobx-react-lite";

import PartnersStore from "../../../../entities/stores/entities/PartnersStore";
import { Remove } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const RemovePartner = ({ id }: Props) => {
  return <Remove name={"контрагент"} store={PartnersStore} id={id} />;
};

export default observer(RemovePartner);
