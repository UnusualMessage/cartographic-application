import { observer } from "mobx-react-lite";

import SpeedsStore from "@entities/speed/model/SpeedsStore";
import { Duplicate } from "@shared/ui/forms/actions";

interface Props {
  id?: string;
}

const DuplicateSpeed = ({ id }: Props) => {
  return <Duplicate name={"скоростной режим"} store={SpeedsStore} id={id} />;
};

export default observer(DuplicateSpeed);
