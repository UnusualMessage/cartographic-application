import { PropsWithChildren } from "react";

import { wrapper } from "./buttons.module.scss";

const TableButtons = ({ children }: PropsWithChildren) => {
  return <div className={wrapper}>{children}</div>;
};

export default TableButtons;
