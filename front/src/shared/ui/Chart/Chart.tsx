import classNames from "classnames";
import { PropsWithChildren } from "react";

import { wrapper, main } from "./chart.module.scss";

interface Props extends PropsWithChildren {
  outerClass: string;
  innerClass: string;
}

const Chart = ({ innerClass, outerClass, children }: Props) => {
  return (
    <div className={classNames(wrapper, outerClass)}>
      <div className={classNames(main, innerClass)}>{children}</div>
    </div>
  );
};

export default Chart;
