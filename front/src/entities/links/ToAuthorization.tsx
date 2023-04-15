import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@shared/assets";

const ToAuthorization = () => {
  return (
    <Link to={routes.authorization.path}>
      <Button icon={<UserOutlined />} size={"large"} type={"primary"}>
        Авторизация
      </Button>
    </Link>
  );
};

export default ToAuthorization;
