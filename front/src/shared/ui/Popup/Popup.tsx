import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { wrapper } from "./popup.module.scss";

interface Props extends PropsWithChildren {
  x?: number;
  y?: number;
  visible?: boolean;
}

const Popup = ({ x, y, visible, children }: Props) => {
  if (!visible) {
    return <></>;
  }

  return (
    <>
      {createPortal(
        <div className={wrapper} style={{ left: x, top: y }}>
          {children}
        </div>,
        document.getElementById("body") as HTMLDivElement
      )}
    </>
  );
};

export default Popup;
