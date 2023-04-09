import { observer } from "mobx-react-lite";

import { PostsStore } from "@entities/business";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemovePost = ({ id }: Props) => {
  return <Remove name={"должность"} store={PostsStore} id={id} />;
};

export default observer(RemovePost);
