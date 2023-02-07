import { observer } from "mobx-react-lite";

import { PostsStore } from "@entities/post/model";
import { Duplicate } from "@shared/ui/forms/actions";

interface Props {
  id?: string;
}

const DuplicatePost = ({ id }: Props) => {
  return <Duplicate name={"должность"} store={PostsStore} id={id} />;
};

export default observer(DuplicatePost);
