import { SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ToSettings = () => {
  return (
    <Button icon={<SettingOutlined />} size={"large"} type={"text"} disabled>
      Настройки
    </Button>
  );
};

export default ToSettings;
