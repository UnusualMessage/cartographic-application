import React, { PropsWithChildren } from "react";

import { useResizing } from "@shared/lib";
import { ResizeType } from "@shared/misc";
import { Resize } from "@shared/ui";

import { content, wrapper } from "./aside.module.scss";

const ModeratorAside = ({ children }: PropsWithChildren) => {
  const type = ResizeType.width;

  const props = {
    type: type,
    initial: 350,
    bottomBorder: 3,
  };

  const { size, start, isResizing } = useResizing(props);

  return (
    <aside
      className={wrapper}
      style={{ width: size }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={content}>{children}</div>
      <Resize isResizing={isResizing} type={type} start={start} />
    </aside>
  );
};

export default ModeratorAside;
