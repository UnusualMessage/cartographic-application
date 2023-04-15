import {
  PauseOutlined,
  StepForwardOutlined,
  FieldTimeOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Typography, Space, Badge } from "antd";
import { observer } from "mobx-react-lite";

import { AuthStore } from "@entities/auth";
import { OrganizationsStore } from "@entities/business";
import {
  ToMonitoring,
  ToReferences,
  ToReports,
  ToSettings,
} from "@entities/links";
import { about } from "@shared/assets";
import { UpdateStore } from "@shared/misc";
import { TractorFilled } from "@shared/ui";

import { container, logo, wrapper } from "./header.module.scss";

const { Text, Title } = Typography;

const Header = () => {
  return (
    <Space className={wrapper}>
      <Space className={container}>
        <Space className={logo}>
          <TractorFilled />
          <Title level={2} style={{ margin: 0 }}>
            {about.title}
          </Title>
        </Space>

        <ToMonitoring type={"text"} relative text={"Мониторинг"} />
        <ToReferences />
        <ToReports />
      </Space>

      <Space className={container}>
        <Button
          icon={<PauseOutlined />}
          type={UpdateStore.paused ? "primary" : "text"}
          size={"large"}
          onClick={() => UpdateStore.pause()}
        />
        <Button
          icon={<FieldTimeOutlined />}
          type={UpdateStore.stopped ? "primary" : "text"}
          size={"large"}
          onClick={() => UpdateStore.stop()}
        />
        <Button
          icon={<StepForwardOutlined />}
          type={UpdateStore.active ? "primary" : "text"}
          size={"large"}
          onClick={() => UpdateStore.resume()}
        />
      </Space>

      <Space className={container}>
        <ToSettings />

        <Badge count={100} size={"small"} offset={[-20, 10]}>
          <Button icon={<BellOutlined />} type={"text"} size={"large"} />
        </Badge>

        <Space direction={"vertical"} size={2}>
          <Text>{AuthStore.user?.fullName}</Text>
          <Text strong>{OrganizationsStore.organization?.title}</Text>
        </Space>

        <Button
          icon={<LogoutOutlined />}
          type={"text"}
          size={"large"}
          onClick={() => AuthStore.logout()}
        />
      </Space>
    </Space>
  );
};

export default observer(Header);
