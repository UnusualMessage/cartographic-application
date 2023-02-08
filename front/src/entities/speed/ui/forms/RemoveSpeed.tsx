import { observer } from "mobx-react-lite";

import SpeedsStore from "@entities/speed/model/SpeedsStore";
import { Remove } from "@shared/ui/forms/actions";

interface Props {
  id?: string;
}

const RemoveSpeed = ({ id }: Props) => {
  return <Remove name={"скоростной режим"} store={SpeedsStore} id={id} />;
};

export default observer(RemoveSpeed);
