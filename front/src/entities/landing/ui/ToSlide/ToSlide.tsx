import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { CSSProperties } from "react";

import { wrapper, up, down } from "./link.module.scss";

interface Props {
  type: "next" | "prev";
  id?: string;
}

const ToSlide = ({ id, type }: Props) => {
  const iconStyle: CSSProperties = { fontSize: "32px", color: "#1677ff" };
  const title = type === "next" ? "Вперед" : "Назад";
  const className = type === "next" ? down : up;

  const icon =
    type === "next" ? (
      <ArrowDownOutlined style={iconStyle} />
    ) : (
      <ArrowUpOutlined style={iconStyle} />
    );

  return id ? (
    <a href={`#${id}`} className={classNames(wrapper, className)} title={title}>
      {icon}
    </a>
  ) : (
    <></>
  );
};

export default ToSlide;
