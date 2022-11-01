import { PropsWithChildren, useState } from "react";
import { Button, Classes, Dialog } from "@blueprintjs/core";

const Create = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleClick} text={"Дублировать"} icon={"duplicate"} />
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        title={"Дублирование записи"}
      >
        <div className={Classes.DIALOG_BODY}>{children}</div>
      </Dialog>
    </>
  );
};

export default Create;
