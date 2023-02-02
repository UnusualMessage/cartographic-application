import { observer } from "mobx-react-lite";

import { Duplicate } from "../../../components/auxiliary/forms/actions";
import SpeedsStore from "../../../stores/entities/SpeedsStore";

interface Props {
  id?: string;
}

const DuplicateSpeed = ({ id }: Props) => {
  return <Duplicate name={"скоростной режим"} store={SpeedsStore} id={id} />;
};

export default observer(DuplicateSpeed);
