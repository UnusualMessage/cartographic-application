import { PropsWithChildren } from "react";

import { wrapper } from "./page.module.scss";

const TabPage = ({ children }: PropsWithChildren) => {
  return <div className={wrapper}>{children}</div>;
};

export default TabPage;
