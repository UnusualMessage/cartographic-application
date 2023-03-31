import { Typography } from "antd";
import classNames from "classnames";
import { PropsWithChildren } from "react";

import { wrapper, main } from "./chart.module.scss";

interface Props extends PropsWithChildren {
  outerClass: string;
  innerClass: string;
  title?: string;
}

const { Text } = Typography;

const Chart = ({ innerClass, outerClass, title, children }: Props) => {
  return (
    <div className={classNames(wrapper, outerClass)}>
      <div className={classNames(main, innerClass)}>
        {title ?? <Text strong>{title}</Text>}
        {children}
      </div>
    </div>
  );
};

export default Chart;
