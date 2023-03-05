import { HomeFilled } from "@ant-design/icons";
import { Empty, Space, Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { wrapper } from "./placeholder.module.scss";

const { Text } = Typography;

const ToHome = () => {
  return (
    <Space direction={"vertical"}>
      <Text strong>Страница не найдена!</Text>
      <Link to={"/"}>
        <Button icon={<HomeFilled />} type={"primary"}>
          На главную
        </Button>
      </Link>
    </Space>
  );
};

const EmptyPage = () => {
  return (
    <Space className={wrapper}>
      <Empty description={<ToHome />} />
    </Space>
  );
};

export default EmptyPage;
