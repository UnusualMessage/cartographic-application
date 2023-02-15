import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui";

import { SpeedsStore } from "../../model";

interface Props {
  id?: string;
}

const RemoveSpeed = ({ id }: Props) => {
  return <Remove name={"скоростной режим"} store={SpeedsStore} id={id} />;
};

export default observer(RemoveSpeed);
