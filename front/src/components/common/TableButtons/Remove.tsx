import { PropsWithChildren, useState } from "react";
import { Button, Classes, Dialog } from "@blueprintjs/core";

const Remove = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleClick} text={"Удалить"} icon={"remove"} />
      <Dialog isOpen={isOpen} onClose={handleClose} title={"Удаление записи"}>
        <div className={Classes.DIALOG_BODY}>{children}</div>
      </Dialog>
    </>
  );
};

export default Remove;
