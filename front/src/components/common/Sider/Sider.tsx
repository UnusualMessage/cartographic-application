import React, { PropsWithChildren } from "react";

import { content, wrapper } from "./sider.module.scss";

import { useResizing } from "../../../hooks";
import { ResizeType } from "../../../types/common";
import Resize from "../../auxiliary/Resize";

const Sider = ({ children }: PropsWithChildren) => {
  const type = ResizeType.width;

  const props = {
    type: type,
    initial: 370,
    bottomBorder: 3,
  };

  const { size, start, isResizing } = useResizing(props);

  return (
    <div className={wrapper} style={{ width: size }}>
      <div className={content}>{children}</div>
      <Resize isResizing={isResizing} type={type} start={start} />
    </div>
  );
};

export default Sider;
