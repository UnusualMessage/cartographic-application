import { PropsWithChildren, useState } from "react";
import { Button, Classes, Dialog } from "@blueprintjs/core";

const Update = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleClick} text={"Редактировать"} icon={"edit"} />
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        title={"Редактирование записи"}
      >
        <div className={Classes.DIALOG_BODY}>{children}</div>
      </Dialog>
    </>
  );
};

export default Update;
