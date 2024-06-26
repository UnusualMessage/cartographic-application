import { PropsWithChildren } from "react";

import { useResizing } from "@shared/lib";
import { Resizes } from "@shared/misc";
import { Resize } from "@shared/ui";

import { content, wrapper } from "./footer.module.scss";

const Footer = ({ children }: PropsWithChildren) => {
  const type = Resizes.height;

  const props = {
    type: type,
    initial: 350,
    bottomBorder: 3,
  };

  const { size, start, isResizing, toggle } = useResizing(props);

  return (
    <footer className={wrapper} style={{ height: `${size}px` }}>
      <Resize
        type={type}
        start={start}
        isResizing={isResizing}
        onClick={toggle}
        hidden={size === props.bottomBorder}
      />
      <div className={content}>{children}</div>
    </footer>
  );
};

export default Footer;
