import { Classes, Icon } from "@blueprintjs/core";

import Empty from "../../auxiliary/Empty";
import DialogForm from "../../auxiliary/DialogForm";

const DuplicatePost = () => {
  return (
    <DialogForm
      title={"Дублирование должности"}
      text={"Дублировать"}
      icon={<Icon icon={"duplicate"} />}
    >
      <div className={Classes.DIALOG_BODY}>
        <Empty />
      </div>

      <div className={Classes.DIALOG_FOOTER}></div>
    </DialogForm>
  );
};

export default DuplicatePost;
