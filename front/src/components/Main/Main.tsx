import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";

import { wrapper } from "./main.module.scss";

const Main = ({ children }: PropsWithChildren) => {
  return <div className={wrapper}>{children}</div>;
};

export default observer(Main);
