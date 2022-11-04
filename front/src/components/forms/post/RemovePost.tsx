import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import DialogForm from "../../auxiliary/DialogForm";
import { PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { Post } from "../../../types/entities";

interface Props {
  id?: string;
}

const RemovePost = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [post, setPost] = useState<Post | undefined>(undefined);

  useFetch(async () => {
    if (id) {
      setPost(await PostsStore.getById(id));
    }
  }, [id]);

  const handleRemove = async () => {
    if (post) {
      await PostsStore.remove(post.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Удаление записи (должность)"}
      buttonText={"Удалить"}
      buttonIcon={<Icon icon={"remove"} />}
      buttonDisabled={!id}
      onAccept={id ? handleRemove : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите удаление записи ${post?.title} - ${post?.id}`}
    </DialogForm>
  );
};

export default observer(RemovePost);
