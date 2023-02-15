import { observer } from "mobx-react-lite";

import { Duplicate } from "@shared/ui";

import { PartnersStore } from "../../model";

interface Props {
  id?: string;
}

const DuplicatePartner = ({ id }: Props) => {
  return <Duplicate name={"контрагент"} store={PartnersStore} id={id} />;
};

export default observer(DuplicatePartner);
