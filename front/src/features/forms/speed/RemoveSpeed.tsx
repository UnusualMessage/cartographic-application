import { observer } from "mobx-react-lite";

import { Remove } from "../../../components/auxiliary/forms/actions";
import SpeedsStore from "../../../stores/entities/SpeedsStore";

interface Props {
  id?: string;
}

const RemoveSpeed = ({ id }: Props) => {
  return <Remove name={"скоростной режим"} store={SpeedsStore} id={id} />;
};

export default observer(RemoveSpeed);
