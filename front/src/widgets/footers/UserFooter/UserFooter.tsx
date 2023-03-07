import { PropsWithChildren } from "react";

import { useResizing } from "@shared/lib";
import { ResizeType } from "@shared/misc";
import Resize from "@shared/ui/Resize";

import { content, wrapper } from "./footer.module.scss";

const UserFooter = ({ children }: PropsWithChildren) => {
  const type = ResizeType.height;

  const props = {
    type: type,
    initial: 420,
    bottomBorder: 3,
  };

  const { size, start, isResizing } = useResizing(props);

  return (
    <footer className={wrapper} style={{ height: `${size}px` }}>
      <Resize type={type} start={start} isResizing={isResizing} />
      <div className={content}>{children}</div>
    </footer>
  );
};

export default UserFooter;
