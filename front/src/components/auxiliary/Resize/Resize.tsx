import classNames from "classnames";
import { MouseEventHandler } from "react";

import { active, height, width, wrapper } from "./resize.module.scss";

import { ResizeType } from "../../../types/common";

interface Props {
  start: MouseEventHandler;
  isResizing: boolean;
  type: ResizeType;
}

const Resize = ({ start, isResizing, type }: Props) => {
  const classes = classNames({
    [wrapper]: true,
    [active]: isResizing,
    [width]: type === ResizeType.width,
    [height]: type === ResizeType.height,
  });

  return <div className={classes} onMouseDown={start} />;
};

export default Resize;
