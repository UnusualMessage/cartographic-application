import { observer } from "mobx-react-lite";

import { PostsStore } from "@entities/business";
import { Duplicate } from "@shared/ui";

interface Props {
  id?: string;
}

const DuplicatePost = ({ id }: Props) => {
  return <Duplicate name={"должность"} store={PostsStore} id={id} />;
};

export default observer(DuplicatePost);
