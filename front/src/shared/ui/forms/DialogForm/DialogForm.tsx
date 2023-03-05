import { Modal, Button } from "antd";
import {
  FormEventHandler,
  memo,
  PropsWithChildren,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { invoke } from "../../../lib";

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

  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const afterClose = () => {
    if (setSuccessful) {
      setSuccessful(false);
    }
  };

  const deny = () => {
    invoke(onDeny);
    close();
  };

  const accept = () => {
    invoke(onAccept);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    accept();
  };

  useEffect(() => {
    if (successful) {
      close();
    }
  }, [successful]);

  return (
    <>
      <Button
        onClick={open}
        icon={buttonIcon}
        disabled={buttonDisabled}
        type={"text"}
        size={"large"}
      >
        {buttonText}
      </Button>
      <Modal
        open={isOpen}
        onOk={accept}
        onCancel={deny}
        title={title}
        okText={"Принять"}
        afterClose={afterClose}
        destroyOnClose
      >
        <form onSubmit={handleSubmit}>{children}</form>
      </Modal>
    </>
  );
};

export default memo(DialogForm);
