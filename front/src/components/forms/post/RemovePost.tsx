import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import DialogForm from "../../auxiliary/DialogForm";
import { PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";

interface Props {
  id?: string;
}

const RemovePost = ({ id }: Props) => {
  const post = PostsStore.post;

  useFetch(async () => {
    if (id) {
      await PostsStore.getById(id);
    }
  }, [id]);

  const handleRemove = async () => {
    if (post) {
      await PostsStore.remove(post.id);
    }
  };

  return (
    <DialogForm
      title={"Удаление записи (должность)"}
      text={"Удалить"}
      icon={<Icon icon={"remove"} />}
      onAccept={id ? handleRemove : undefined}
      disabled={!id}
    >
      {`Подтвердите удаление записи ${post?.title} - ${post?.id}`}
    </DialogForm>
  );
};

export default observer(RemovePost);
