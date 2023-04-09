import {
  LeftOutlined,
  DownOutlined,
  RightOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import classNames from "classnames";
import { MouseEventHandler, ReactNode, useState } from "react";

import {
  active,
  height,
  width,
  wrapper,
  line,
  buttonHorizontal,
  buttonVertical,
  opened,
  closed,
} from "./resize.module.scss";
import { ResizeType } from "../../misc";

interface Props {
  start: MouseEventHandler;
  isResizing: boolean;
  hidden: boolean;
  onClick: MouseEventHandler;
  type: ResizeType;
}

const Resize = ({ start, hidden, isResizing, type, onClick }: Props) => {
  const [switchActive, setSwitchActive] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  const lineClasses = classNames({
    [line]: true,
    [active]: isResizing,
    [width]: type === ResizeType.width,
    [height]: type === ResizeType.height,
  });

  const buttonClasses = classNames({
    [buttonHorizontal]: type === ResizeType.height,
    [buttonVertical]: type === ResizeType.width,
    [opened]: switchActive,
    [closed]: !switchActive,
  });

  let icon: ReactNode;

  if (hidden) {
    if (type === ResizeType.width) {
      icon = <RightOutlined />;
    } else {
      icon = <UpOutlined />;
    }
  } else {
    if (type === ResizeType.width) {
      icon = <LeftOutlined />;
    } else {
      icon = <DownOutlined />;
    }
  }

  const hide = () => {
    setSwitchActive(false);
  };

  const show = () => {
    setSwitchActive(true);
  };

  const onMouseEnter = () => {
    show();
  };

  const onMouseLeave = () => {
    clearTimeout(timeoutId);
    const id = setTimeout(hide, 2000);
    setTimeoutId(id as unknown as number);
  };

  return (
    <div className={wrapper}>
      <div
        className={lineClasses}
        onMouseDown={start}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Button
        className={buttonClasses}
        icon={icon}
        onClick={onClick}
        type={"primary"}
      />
    </div>
  );
};

export default Resize;
