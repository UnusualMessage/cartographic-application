import {
  LeftOutlined,
  DownOutlined,
  RightOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import classNames from "classnames";
import { MouseEventHandler, ReactNode } from "react";

import {
  active,
  height,
  width,
  wrapper,
  line,
  buttonHorizontal,
  buttonVertical,
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
  const lineClasses = classNames({
    [line]: true,
    [active]: isResizing,
    [width]: type === ResizeType.width,
    [height]: type === ResizeType.height,
  });

  const buttonClasses = classNames({
    [buttonHorizontal]: type === ResizeType.height,
    [buttonVertical]: type === ResizeType.width,
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

  return (
    <div className={wrapper}>
      <div className={lineClasses} onMouseDown={start} />
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
