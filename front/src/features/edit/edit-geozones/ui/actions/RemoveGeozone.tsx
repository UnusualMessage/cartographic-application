import { observer } from "mobx-react-lite";

import { GeozonesStore } from "@entities/business";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemoveGeozone = ({ id }: Props) => {
  return <Remove name={"геозона"} store={GeozonesStore} id={id} />;
};

export default observer(RemoveGeozone);
