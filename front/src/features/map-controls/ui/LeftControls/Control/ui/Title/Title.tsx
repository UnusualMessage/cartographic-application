import { MenuOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { ReactNode, useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore } from "@shared/misc";

import { wrapper } from "./title.module.scss";

interface Props {
  label: ReactNode;
}

const { Text } = Typography;

const Title = ({ label }: Props) => {
  const context = useContext(SchemaTemplateContext);

  const active = ControlsStore.mapDrawerActive;

  const showDrawer = () => {
    ControlsStore.showDrawer();
  };

  const hideDrawer = () => {
    ControlsStore.hideDrawer();
  };

  let menu = <></>;
  if (context?.mainControls?.menu) {
    menu = (
      <Button
        onClick={active ? hideDrawer : showDrawer}
        icon={<MenuOutlined />}
        type={active ? "primary" : "text"}
      />
    );
  }

  return (
    <div className={wrapper}>
      {menu}
      <Text strong>{label}</Text>
    </div>
  );
};

export default observer(Title);
