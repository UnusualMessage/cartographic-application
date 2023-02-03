import { observer } from "mobx-react-lite";

import { PostsStore } from "../../../../entities/stores/entities";
import { Remove } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const RemovePost = ({ id }: Props) => {
  return <Remove name={"должность"} store={PostsStore} id={id} />;
};

export default observer(RemovePost);
