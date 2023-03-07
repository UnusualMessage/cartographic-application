import { Space } from "antd";
import { PropsWithChildren } from "react";

import { wrapper } from "./buttons.module.scss";

const TableButtons = ({ children }: PropsWithChildren) => {
  return <Space className={wrapper}>{children}</Space>;
};

export default TableButtons;
