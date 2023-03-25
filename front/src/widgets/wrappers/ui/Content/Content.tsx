import { PropsWithChildren } from "react";

import { wrapper } from "./content.module.scss";

const Content = ({ children }: PropsWithChildren) => {
  return <div className={wrapper}>{children}</div>;
};

export default Content;
