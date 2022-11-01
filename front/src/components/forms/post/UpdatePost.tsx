import { Classes, Icon } from "@blueprintjs/core";
import Empty from "../../auxiliary/Empty";
import DialogForm from "../../auxiliary/DialogForm";

const UpdatePost = () => {
  return (
    <DialogForm
      title={"Редактирование должности"}
      text={"Редактировать"}
      icon={<Icon icon={"edit"} />}
    >
      <div className={Classes.DIALOG_BODY}>
        <Empty />
      </div>

      <div className={Classes.DIALOG_FOOTER}></div>
    </DialogForm>
  );
};

export default UpdatePost;
