import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";
import { v4 as uuid } from "uuid";

import DialogForm from "../../auxiliary/DialogForm";
import { PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";

interface Props {
  id?: string;
}

const DuplicatePost = ({ id }: Props) => {
  const post = PostsStore.post;

  useFetch(async () => {
    if (id) {
      await PostsStore.getById(id);
    }
  }, [id]);

  const handleDuplicate = async () => {
    if (post) {
      const duplicatedPost = { ...post };
      duplicatedPost.id = uuid();

      await PostsStore.add(duplicatedPost);
    }
  };

  return (
    <DialogForm
      title={"Дублирование должности"}
      text={"Дублировать"}
      icon={<Icon icon={"duplicate"} />}
      onAccept={id ? handleDuplicate : undefined}
      disabled={!id}
    >
      {`Подтвердите дублирование записи ${post?.title} - ${post?.id}`}
    </DialogForm>
  );
};

export default observer(DuplicatePost);
