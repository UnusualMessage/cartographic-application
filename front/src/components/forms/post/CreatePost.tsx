import { Classes, Icon } from "@blueprintjs/core";

import Empty from "../../common/Empty";
import DialogForm from "../../DialogForm";

const CreatePost = () => {
  return (
    <DialogForm
      title={"Новая должность"}
      icon={<Icon icon={"add"} />}
      text={"Добавить"}
    >
      <div className={Classes.DIALOG_BODY}>
        <Empty />
      </div>

      <div className={Classes.DIALOG_FOOTER}></div>
    </DialogForm>
  );
};

export default CreatePost;
