import { Button, Classes, Dialog, MaybeElement } from "@blueprintjs/core";
import {
  FormEventHandler,
  memo,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface Props extends PropsWithChildren {
  text: string;
  title: string;
  icon: MaybeElement;
  disabled?: boolean;
  onAccept?: () => void;
  onDeny?: () => void;
  successful?: boolean;
}

const DialogForm = ({
  children,
  text,
  title,
  icon,
  onAccept,
  onDeny,
  disabled,
  successful,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const handleDeny = () => {
    if (onDeny) {
      onDeny();
    }

    handleClose();
  };

  const handleAccept = () => {
    if (onAccept) {
      onAccept();
    }
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    handleAccept();
  };

  useEffect(() => {
    if (successful) {
      handleClose();
    }
  }, [successful]);

  return (
    <>
      <Button
        onClick={handleClick}
        text={text}
        icon={icon}
        disabled={disabled}
      />
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        title={title}
        usePortal
        lazy
      >
        <form onSubmit={handleSubmit}>
          <div className={Classes.DIALOG_BODY}>{children}</div>

          {onAccept ? (
            <div className={Classes.DIALOG_FOOTER}>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <Button intent={"success"} type={"submit"}>
                  Подтвердить
                </Button>
                <Button intent={"danger"} onClick={handleDeny}>
                  Отменить
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </form>
      </Dialog>
    </>
  );
};

export default memo(DialogForm);
