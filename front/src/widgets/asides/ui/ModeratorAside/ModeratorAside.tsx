import React, { PropsWithChildren } from "react";

import { useResizing } from "@shared/lib";
import { Resizes } from "@shared/misc";
import { Resize } from "@shared/ui";

import { content, wrapper } from "./aside.module.scss";

const ModeratorAside = ({ children }: PropsWithChildren) => {
  const type = Resizes.width;

  const props = {
    type: type,
    initial: 350,
    bottomBorder: 3,
  };

  const { size, start, isResizing, toggle } = useResizing(props);

  return (
    <aside
      className={wrapper}
      style={{ width: size }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={content}>{children}</div>
      <Resize
        isResizing={isResizing}
        type={type}
        start={start}
        onClick={toggle}
        hidden={size === props.bottomBorder}
      />
    </aside>
  );
};

export default ModeratorAside;
