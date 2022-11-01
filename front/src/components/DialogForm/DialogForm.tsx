import { Button, Dialog, MaybeElement } from "@blueprintjs/core";
import { PropsWithChildren, useState } from "react";

interface Props extends PropsWithChildren {
  text: string;
  title: string;
  icon: MaybeElement;
}

const DialogForm = ({ children, text, title, icon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleClick} text={text} icon={icon} />
      <Dialog isOpen={isOpen} onClose={handleClose} title={title}>
        {children}
      </Dialog>
    </>
  );
};

export default DialogForm;
