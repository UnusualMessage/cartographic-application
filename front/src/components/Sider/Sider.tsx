import React, { PropsWithChildren } from "react";

import { collapse, wrapper } from "./sider.module.scss";

import { Resize, useResizing } from "../../hooks";

const Sider = ({ children }: PropsWithChildren) => {
  const { size, start } = useResizing({
    initial: 370,
    type: Resize.width,
    limit: {
      top: 1920,
      bottom: 370,
    },
  });

  return (
    <div className={wrapper} style={{ width: size }}>
      {children}
      <div className={collapse} onMouseDown={start} />
    </div>
  );
};

export default Sider;
