import { Button, Classes, Dialog, MaybeElement } from "@blueprintjs/core";
import {
  FormEventHandler,
  memo,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface Props extends PropsWithChildren {
  buttonText: string;
  buttonIcon: MaybeElement;
  buttonDisabled?: boolean;
  title: string;
  onAccept?: () => void;
  onDeny?: () => void;
  successful?: boolean;
  setSuccessful?: (value: boolean) => void;
}

const DialogForm = ({
  children,
  buttonDisabled,
  buttonIcon,
  buttonText,
  title,
  onAccept,
  onDeny,
  successful,
  setSuccessful,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const resetSuccess = () => {
    if (setSuccessful) {
      setSuccessful(false);
    }
  };

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
        text={buttonText}
        icon={buttonIcon}
        disabled={buttonDisabled}
      />
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        title={title}
        onClosed={resetSuccess}
        onOpened={resetSuccess}
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
