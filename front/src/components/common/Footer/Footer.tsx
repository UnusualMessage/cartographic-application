import { PropsWithChildren } from "react";

import { content, wrapper } from "./footer.module.scss";
import Resize from "../../auxiliary/Resize";
import { ResizeType } from "../../../types/common";
import { useResizing } from "../../../hooks";

const Footer = ({ children }: PropsWithChildren) => {
  const type = ResizeType.height;

  const props = {
    type: type,
    initial: 350,
    bottomBorder: 13,
  };

  const { size, start, isResizing } = useResizing(props);

  return (
    <footer className={wrapper} style={{ height: `${size}px` }}>
      <Resize type={type} start={start} isResizing={isResizing} />
      <div className={content}>{children}</div>
    </footer>
  );
};

export default Footer;
