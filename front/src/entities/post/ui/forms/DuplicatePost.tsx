import { observer } from "mobx-react-lite";

import { Duplicate } from "@shared/ui";

import { PostsStore } from "../../model";

interface Props {
  id?: string;
}

const DuplicatePost = ({ id }: Props) => {
  return <Duplicate name={"должность"} store={PostsStore} id={id} />;
};

export default observer(DuplicatePost);
