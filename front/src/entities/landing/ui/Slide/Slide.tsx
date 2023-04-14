import { PropsWithChildren, WheelEventHandler } from "react";

import { wrapper, content } from "./slide.module.scss";
import ToSlide from "../ToSlide";

interface Props extends PropsWithChildren {
  anchorId: string;
  prevId?: string;
  nextId?: string;
  image?: string;
}

const Slide = ({ anchorId, prevId, nextId, image, children }: Props) => {
  const onWheel: WheelEventHandler = (e) => {
    const link = document.createElement("a") as HTMLAnchorElement;

    if (e.deltaY > 0) {
      if (!nextId) {
        return;
      }

      link.href = `#${nextId}`;
    } else {
      if (!prevId) {
        return;
      }

      link.href = `#${prevId}`;
    }

    link.click();
  };

  return (
    <div
      id={anchorId}
      className={wrapper}
      onWheel={onWheel}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <ToSlide id={prevId} type={"prev"} />
      <div className={content}>{children}</div>
      <ToSlide id={nextId} type={"next"} />
    </div>
  );
};

export default Slide;
