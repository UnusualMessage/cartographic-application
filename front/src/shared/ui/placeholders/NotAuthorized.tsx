import { HomeFilled, UserOutlined } from "@ant-design/icons";
import { Space, Result, Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { wrapper } from "./placeholder.module.scss";

const { Text } = Typography;

const NotAuthorized = () => {
  return (
    <Space className={wrapper} direction={"vertical"}>
      <Result
        status="403"
        title="403"
        subTitle="У вас нет прав!"
        extra={
          <Space direction={"vertical"}>
            <Link to={"/authorization"}>
              <Button icon={<UserOutlined />} type={"primary"}>
                Авторизоваться
              </Button>
            </Link>
            <Text>или</Text>
            <Link to={"/"}>
              <Button icon={<HomeFilled />} type={"primary"}>
                На главную
              </Button>
            </Link>
          </Space>
        }
      />
    </Space>
  );
};

export default NotAuthorized;
