import { observer } from "mobx-react-lite";

import { TrailersStore } from "@entities/trailer/model";
import { Remove } from "@shared/ui/forms/actions";

interface Props {
  id?: string;
}

const RemoveTrailer = ({ id }: Props) => {
  return <Remove name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(RemoveTrailer);
