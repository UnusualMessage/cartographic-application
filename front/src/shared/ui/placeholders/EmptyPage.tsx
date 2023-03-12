import { HomeFilled } from "@ant-design/icons";
import { Space, Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { wrapper } from "./placeholder.module.scss";

const EmptyPage = () => {
  return (
    <Space className={wrapper} direction={"vertical"}>
      <Result
        status="404"
        title="404"
        subTitle="Страница не существует!"
        extra={
          <Link to={"/"}>
            <Button icon={<HomeFilled />} type={"primary"}>
              На главную
            </Button>
          </Link>
        }
      />
    </Space>
  );
};

export default EmptyPage;
