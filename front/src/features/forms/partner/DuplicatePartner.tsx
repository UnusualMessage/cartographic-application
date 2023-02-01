import { observer } from "mobx-react-lite";

import { Duplicate } from "../../../components/auxiliary/forms/actions";
import PartnersStore from "../../../stores/entities/PartnersStore";

interface Props {
  id?: string;
}

const DuplicatePartner = ({ id }: Props) => {
  return <Duplicate name={"контрагент"} store={PartnersStore} id={id} />;
};

export default observer(DuplicatePartner);
