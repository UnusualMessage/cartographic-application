import { observer } from "mobx-react-lite";

import { MountedsStore } from "@entities/business";
import { Duplicate } from "@shared/ui";

interface Props {
  id?: string;
}

const DuplicateMounted = ({ id }: Props) => {
  return <Duplicate name={"навесной агрегат"} store={MountedsStore} id={id} />;
};

export default observer(DuplicateMounted);
