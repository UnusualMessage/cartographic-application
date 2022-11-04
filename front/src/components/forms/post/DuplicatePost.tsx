import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";
import { useState } from "react";

import DialogForm from "../../auxiliary/DialogForm";
import { PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
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
      title={"Дублирование записи (должность)"}
      buttonText={"Дублировать"}
      buttonIcon={<Icon icon={"duplicate"} />}
      buttonDisabled={!id}
      onAccept={id ? handleDuplicate : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите дублирование записи ${post?.title} - ${post?.id}`}
    </DialogForm>
  );
};

export default observer(DuplicatePost);
