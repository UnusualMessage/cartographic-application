import { PropsWithChildren } from "react";

import { wrapper } from "./main.module.scss";

const Main = ({ children }: PropsWithChildren) => {
  return <main className={wrapper}>{children}</main>;
};

export default Main;
