import { observer } from "mobx-react-lite";

import { Remove } from "../../../components/auxiliary/forms/actions";
import PartnersStore from "../../../stores/entities/PartnersStore";

interface Props {
  id?: string;
}

const RemovePartner = ({ id }: Props) => {
  return <Remove name={"контрагент"} store={PartnersStore} id={id} />;
};

export default observer(RemovePartner);
