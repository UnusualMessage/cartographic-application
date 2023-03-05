import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Space } from "antd";
import React from "react";

import { wrapper } from "./placeholder.module.scss";

const Loader = () => {
  const icon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  return (
    <Space className={wrapper}>
      <Spin indicator={icon} />
    </Space>
  );
};

export default Loader;
