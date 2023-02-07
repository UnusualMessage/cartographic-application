import { observer } from "mobx-react-lite";

import { PostsStore } from "@entities/post/model";
import { Remove } from "@shared/ui/forms/actions";

interface Props {
  id?: string;
}

const RemovePost = ({ id }: Props) => {
  return <Remove name={"должность"} store={PostsStore} id={id} />;
};

export default observer(RemovePost);
