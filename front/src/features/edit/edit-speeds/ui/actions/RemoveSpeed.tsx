import { observer } from "mobx-react-lite";

import { SpeedsStore } from "@entities/business";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemoveSpeed = ({ id }: Props) => {
  return <Remove name={"скоростной режим"} store={SpeedsStore} id={id} />;
};

export default observer(RemoveSpeed);
