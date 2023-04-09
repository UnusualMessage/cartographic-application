import { PropsWithChildren } from "react";

import { wrapper } from "./body.module.scss";

const Body = ({ children }: PropsWithChildren) => {
  return (
    <div id={"body"} className={wrapper}>
      {children}
    </div>
  );
};

export default Body;
