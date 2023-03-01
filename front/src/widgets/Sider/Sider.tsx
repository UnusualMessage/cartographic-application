import React, { PropsWithChildren } from "react";

import { useResizing } from "@shared/lib";
import { ResizeType } from "@shared/misc/types/common";
import Resize from "@shared/ui/Resize";

import { content, wrapper } from "./sider.module.scss";

const Sider = ({ children }: PropsWithChildren) => {
  const type = ResizeType.width;

  const props = {
    type: type,
    initial: 400,
    bottomBorder: 3,
  };

  const { size, start, isResizing } = useResizing(props);

  return (
    <div
      className={wrapper}
      style={{ width: size }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={content}>{children}</div>
      <Resize isResizing={isResizing} type={type} start={start} />
    </div>
  );
};

export default Sider;
