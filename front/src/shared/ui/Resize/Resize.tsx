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
import { Resizes } from "../../misc";

interface Props {
  start: MouseEventHandler;
  isResizing: boolean;
  hidden: boolean;
  onClick: MouseEventHandler;
  type: Resizes;
}

const Resize = ({ start, hidden, isResizing, type, onClick }: Props) => {
  const [switchActive, setSwitchActive] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  const lineClasses = classNames({
    [line]: true,
    [active]: isResizing,
    [width]: type === Resizes.width,
    [height]: type === Resizes.height,
  });

  const buttonClasses = classNames({
    [buttonHorizontal]: type === Resizes.height,
    [buttonVertical]: type === Resizes.width,
    [opened]: switchActive,
    [closed]: !switchActive,
  });

  let icon: ReactNode;

  if (hidden) {
    if (type === Resizes.width) {
      icon = <RightOutlined />;
    } else {
      icon = <UpOutlined />;
    }
  } else {
    if (type === Resizes.width) {
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
