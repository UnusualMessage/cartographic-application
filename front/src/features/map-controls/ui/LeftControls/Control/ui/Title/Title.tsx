import { MenuOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

import { ControlsStore } from "@shared/misc";

import { wrapper } from "./title.module.scss";

interface Props {
  label: ReactNode;
}

const { Text } = Typography;

const Title = ({ label }: Props) => {
  const active = ControlsStore.mapDrawerActive;

  const showDrawer = () => {
    ControlsStore.showDrawer();
  };

  const hideDrawer = () => {
    ControlsStore.hideDrawer();
  };

  return (
    <div className={wrapper}>
      <Button
        onClick={active ? hideDrawer : showDrawer}
        icon={<MenuOutlined />}
        type={active ? "primary" : "text"}
      />

      <Text strong>{label}</Text>
    </div>
  );
};

export default observer(Title);
