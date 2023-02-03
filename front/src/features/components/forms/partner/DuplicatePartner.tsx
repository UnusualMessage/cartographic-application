import { observer } from "mobx-react-lite";

import PartnersStore from "../../../../entities/stores/entities/PartnersStore";
import { Duplicate } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const DuplicatePartner = ({ id }: Props) => {
  return <Duplicate name={"контрагент"} store={PartnersStore} id={id} />;
};

export default observer(DuplicatePartner);
