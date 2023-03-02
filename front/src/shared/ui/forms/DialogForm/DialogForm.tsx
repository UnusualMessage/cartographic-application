import { Modal, Button } from "antd";
import {
  FormEventHandler,
  memo,
  PropsWithChildren,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface Props extends PropsWithChildren {
  buttonText: string;
  buttonIcon: ReactNode;
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

    handleClose();
    resetSuccess();
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    handleAccept();
  };

  useEffect(() => {
    resetSuccess();
  }, []);

  useEffect(() => {
    if (successful) {
      handleClose();
    }
  }, [successful]);

  return (
    <>
      <Button
        onClick={handleClick}
        icon={buttonIcon}
        disabled={buttonDisabled}
        type={"text"}
        size={"large"}
      >
        {buttonText}
      </Button>
      <Modal
        open={isOpen}
        onOk={handleAccept}
        onCancel={handleDeny}
        title={title}
      >
        <form onSubmit={handleSubmit}>
          <div>{children}</div>
        </form>
      </Modal>
    </>
  );
};

export default memo(DialogForm);
