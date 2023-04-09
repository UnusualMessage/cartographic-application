import { observer } from "mobx-react-lite";

import { MountedsStore } from "@entities/business";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemoveMounted = ({ id }: Props) => {
  return <Remove name={"навесной агрегат"} store={MountedsStore} id={id} />;
};

export default observer(RemoveMounted);
