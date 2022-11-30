import { observer } from "mobx-react-lite";

import SpeedsStore from "../../../stores/entities/SpeedsStore";
import { Duplicate } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const DuplicateSpeed = ({ id }: Props) => {
  return <Duplicate name={"скоростной режим"} store={SpeedsStore} id={id} />;
};

export default observer(DuplicateSpeed);
