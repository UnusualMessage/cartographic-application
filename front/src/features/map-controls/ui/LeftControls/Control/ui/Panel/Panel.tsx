import { PropsWithChildren } from "react";

import { wrapper } from "./panel.module.scss";

const Panel = ({ children }: PropsWithChildren) => {
  return <div className={wrapper}>{children}</div>;
};

export default Panel;
