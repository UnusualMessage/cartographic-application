import { observer } from "mobx-react-lite";

import { TrailersStore } from "../../../../entities/stores/entities";
import { Remove } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const RemoveTrailer = ({ id }: Props) => {
  return <Remove name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(RemoveTrailer);
