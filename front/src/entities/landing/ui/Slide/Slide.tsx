import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { PropsWithChildren } from "react";

import { wrapper, content, up, down, link } from "./slide.module.scss";

interface Props extends PropsWithChildren {
  anchorId: string;
  prevId?: string;
  nextId?: string;
  image?: string;
}

const Slide = ({ anchorId, prevId, nextId, image, children }: Props) => {
  const prev = prevId ? (
    <a href={`#${prevId}`} className={classNames(link, up)} title={"Назад"}>
      <ArrowUpOutlined style={{ fontSize: "32px", color: "#1677ff" }} />
    </a>
  ) : (
    <></>
  );
  const next = nextId ? (
    <a href={`#${nextId}`} className={classNames(link, down)} title={"Вперед"}>
      <ArrowDownOutlined style={{ fontSize: "32px", color: "#1677ff" }} />
    </a>
  ) : (
    <></>
  );

  return (
    <div
      id={anchorId}
      className={wrapper}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      {prev}
      <div className={content}>{children}</div>
      {next}
    </div>
  );
};

export default Slide;
