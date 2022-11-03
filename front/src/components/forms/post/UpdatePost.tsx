import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import DialogForm from "../../auxiliary/DialogForm";
import { PostsStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";

interface Props {
  id?: string;
}

const UpdatePost = ({ id }: Props) => {
  const post = PostsStore.post;

  useFetch(async () => {
    if (id) {
      await PostsStore.getById(id);
    }
  }, [id]);

  const handleUpdate = async () => {
    if (post) {
      const updatedPost = { ...post };
      await PostsStore.update(updatedPost);
    }
  };

  return (
    <DialogForm
      title={"Редактирование должности"}
      text={"Редактировать"}
      icon={<Icon icon={"edit"} />}
      onAccept={id ? handleUpdate : undefined}
      disabled={!id}
    >
      {"Изменение"}
    </DialogForm>
  );
};

export default observer(UpdatePost);
