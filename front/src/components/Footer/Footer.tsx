import { PropsWithChildren } from "react";

import { content, wrapper } from "./footer.module.scss";
import Resize from "../common/Resize";
import { ResizeType } from "../../types/common";
import { useResizing } from "../../hooks";

const Footer = ({ children }: PropsWithChildren) => {
  const type = ResizeType.height;

  const props = {
    type: type,
    initial: 240,
    bottomBorder: 13,
  };

  const { size, start, isResizing } = useResizing(props);

  return (
    <div className={wrapper} style={{ height: `${size}px` }}>
      <Resize type={type} start={start} isResizing={isResizing} />
      <div className={content}>{children}</div>
    </div>
  );
};

export default Footer;
