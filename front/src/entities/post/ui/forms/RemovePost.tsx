import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui/forms/actions";

import { PostsStore } from "../../../stores/entities";

interface Props {
  id?: string;
}

const RemovePost = ({ id }: Props) => {
  return <Remove name={"должность"} store={PostsStore} id={id} />;
};

export default observer(RemovePost);
