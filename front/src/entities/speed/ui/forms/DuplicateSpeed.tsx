import { observer } from "mobx-react-lite";

import { Duplicate } from "@shared/ui";

import { SpeedsStore } from "../../model";

interface Props {
  id?: string;
}

const DuplicateSpeed = ({ id }: Props) => {
  return <Duplicate name={"скоростной режим"} store={SpeedsStore} id={id} />;
};

export default observer(DuplicateSpeed);
