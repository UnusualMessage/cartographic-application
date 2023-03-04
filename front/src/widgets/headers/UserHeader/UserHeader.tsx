import {
  PauseOutlined,
  StepForwardOutlined,
  FieldTimeOutlined,
  FileExcelOutlined,
  DesktopOutlined,
  FileAddOutlined,
  HomeOutlined,
  SettingOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Typography, Space, Badge } from "antd";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { OrganizationsStore } from "@entities/organization";
import { AuthStore } from "@entities/user";
import { about } from "@shared/assets";
import { UpdateStore } from "@shared/misc";

import { container, logo, wrapper } from "./header.module.scss";

const { Text, Title } = Typography;

const UserHeader = () => {
  return (
    <Space className={wrapper}>
      <Space className={container}>
        <Space className={logo}>
          <HomeOutlined style={{ fontSize: "32px" }} />
          <Title level={2} style={{ margin: 0 }}>
            {about.title}
          </Title>
        </Space>

        <Link to={"/"}>
          <Button icon={<DesktopOutlined />} size={"large"} type={"text"}>
            Мониторинг
          </Button>
        </Link>

        <Link to={"/references/select"}>
          <Button icon={<FileAddOutlined />} size={"large"} type={"text"}>
            Справочники
          </Button>
        </Link>

        <Button
          icon={<FileExcelOutlined />}
          size={"large"}
          type={"text"}
          disabled
        >
          Отчеты
        </Button>
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
        <Button
          icon={<SettingOutlined />}
          size={"large"}
          type={"text"}
          disabled
        >
          Настройки
        </Button>

        <Badge count={100} size={"small"} offset={[-20, 10]}>
          <Button icon={<BellOutlined />} type={"text"} size={"large"} />
        </Badge>

        <Space direction={"vertical"} size={2}>
          <Text>{AuthStore.fullName}</Text>
          <Text strong>{OrganizationsStore.organization?.title}</Text>
        </Space>

        <Button icon={<LogoutOutlined />} type={"text"} size={"large"} />
      </Space>
    </Space>
  );
};

export default observer(UserHeader);
