import { observer } from "mobx-react-lite";

import { PostsStore } from "../../../../entities/stores/entities";
import { Duplicate } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const DuplicatePost = ({ id }: Props) => {
  return <Duplicate name={"должность"} store={PostsStore} id={id} />;
};

export default observer(DuplicatePost);
