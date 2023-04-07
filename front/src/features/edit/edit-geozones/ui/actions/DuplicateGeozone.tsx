import { observer } from "mobx-react-lite";

import { GeozonesStore } from "@entities/business";
import { Duplicate } from "@shared/ui";

interface Props {
  id?: string;
}

const DuplicateGeozone = ({ id }: Props) => {
  return <Duplicate name={"геозона"} store={GeozonesStore} id={id} />;
};

export default observer(DuplicateGeozone);
