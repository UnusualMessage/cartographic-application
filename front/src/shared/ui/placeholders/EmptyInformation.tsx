import { Empty, Space, Typography } from "antd";
import React from "react";

import { wrapper } from "./placeholder.module.scss";

const { Text } = Typography;

const EmptyInformation = () => {
  const description = <Text strong>Информация отсутствует!</Text>;

  return (
    <Space className={wrapper}>
      <Empty description={description} />
    </Space>
  );
};

export default EmptyInformation;
