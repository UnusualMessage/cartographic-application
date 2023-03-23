import { PropsWithChildren } from "react";

import { wrapper } from "./wrapper.module.scss";

const GlobalWrapper = ({ children }: PropsWithChildren) => {
  return <div className={wrapper}>{children}</div>;
};

export default GlobalWrapper;
