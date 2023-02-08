import { observer } from "mobx-react-lite";

import PartnersStore from "@entities/partner/model/PartnersStore";
import { Duplicate } from "@shared/ui/forms/actions";

interface Props {
  id?: string;
}

const DuplicatePartner = ({ id }: Props) => {
  return <Duplicate name={"контрагент"} store={PartnersStore} id={id} />;
};

export default observer(DuplicatePartner);
