import React, { PropsWithChildren } from "react";
import classNames from "classnames";

import { active, collapse, content, wrapper } from "./sider.module.scss";

import { Resize, useResizing } from "../../hooks";

const Sider = ({ children }: PropsWithChildren) => {
  const { size, start, isResizing } = useResizing({
    initial: 370,
    bottomBorder: 370,
    type: Resize.width,
  });

  return (
    <div className={wrapper} style={{ width: size }}>
      <div className={content}>{children}</div>

      <div
        className={classNames({ [collapse]: true, [active]: isResizing })}
        onMouseDown={start}
      />
    </div>
  );
};

export default Sider;
