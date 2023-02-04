import { observer } from "mobx-react-lite";

import { Duplicate } from "@shared/ui/forms/actions";

import { PostsStore } from "../../../stores/entities";

interface Props {
  id?: string;
}

const DuplicatePost = ({ id }: Props) => {
  return <Duplicate name={"должность"} store={PostsStore} id={id} />;
};

export default observer(DuplicatePost);
