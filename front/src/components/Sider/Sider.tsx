import { PropsWithChildren } from "react";

import { wrapper } from "./sider.module.scss";

const Sider = ({ children }: PropsWithChildren) => {
  return <div className={wrapper}>{children}</div>;
};

export default Sider;
