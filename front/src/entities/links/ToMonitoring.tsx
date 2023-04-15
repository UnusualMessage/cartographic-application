import { DesktopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@shared/assets";

interface Props {
  type: "text" | "primary";
  text: string;
  relative?: boolean;
}

const ToMonitoring = ({ relative, type, text }: Props) => {
  const to = relative
    ? routes.current.path
    : `${routes.root.path}${routes.system.path}/${routes.monitoring.path}`;

  return (
    <Link to={to}>
      <Button icon={<DesktopOutlined />} size={"large"} type={type}>
        {text}
      </Button>
    </Link>
  );
};

export default ToMonitoring;
