import { PropsWithChildren } from "react";

import { wrapper } from "./slides.module.scss";

const Slides = ({ children }: PropsWithChildren) => {
  return <div className={wrapper}>{children}</div>;
};

export default Slides;
