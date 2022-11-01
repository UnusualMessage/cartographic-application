import { Classes, Icon } from "@blueprintjs/core";

import Empty from "../../auxiliary/Empty";
import DialogForm from "../../auxiliary/DialogForm";

const RemovePost = () => {
  return (
    <DialogForm
      title={"Удаление должности"}
      text={"Удалить"}
      icon={<Icon icon={"remove"} />}
    >
      <div className={Classes.DIALOG_BODY}>
        <Empty />
      </div>

      <div className={Classes.DIALOG_FOOTER}></div>
    </DialogForm>
  );
};

export default RemovePost;
