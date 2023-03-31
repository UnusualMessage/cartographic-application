import { Typography } from "antd";
import classNames from "classnames";
import { PropsWithChildren } from "react";

import { wrapper, main, title as titleStyle } from "./chart.module.scss";

interface Props extends PropsWithChildren {
  outerClass: string;
  innerClass: string;
  title?: string;
}

const { Text } = Typography;

const Chart = ({ innerClass, outerClass, title, children }: Props) => {
  let text = <></>;

  if (title) {
    text = (
      <Text className={titleStyle} strong>
        {title}
      </Text>
    );
  }

  return (
    <div className={classNames(wrapper, outerClass)}>
      {text}
      <div className={classNames(main, innerClass)}>{children}</div>
    </div>
  );
};

export default Chart;
