import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";

import DialogForm from "../../auxiliary/DialogForm";
import { PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { useState } from "react";
import { Post } from "../../../types/entities";

interface Props {
  id?: string;
}

const DuplicatePost = ({ id }: Props) => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [successful, setSuccessful] = useState(false);

  useFetch(async () => {
    if (id) {
      setPost(await PostsStore.getById(id));
    }
  }, [id]);

  const handleDuplicate = async () => {
    if (post) {
      await PostsStore.duplicate(post.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Дублирование должности"}
      text={"Дублировать"}
      icon={<Icon icon={"duplicate"} />}
      onAccept={id ? handleDuplicate : undefined}
      disabled={!id}
      successful={successful}
    >
      {`Подтвердите дублирование записи ${post?.title} - ${post?.id}`}
    </DialogForm>
  );
};

export default observer(DuplicatePost);
