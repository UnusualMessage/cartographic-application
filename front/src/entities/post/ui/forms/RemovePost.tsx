import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui";

import { PostsStore } from "../../model";

interface Props {
  id?: string;
}

const RemovePost = ({ id }: Props) => {
  return <Remove name={"должность"} store={PostsStore} id={id} />;
};

export default observer(RemovePost);
