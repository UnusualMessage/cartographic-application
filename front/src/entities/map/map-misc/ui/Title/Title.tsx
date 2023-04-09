import { MenuOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { ReactNode, useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { useQueryNavigate } from "@shared/lib";
import { DrawerStore } from "@shared/misc";

import { wrapper } from "./title.module.scss";

interface Props {
  label: ReactNode;
}

const { Text } = Typography;

const Title = ({ label }: Props) => {
  const context = useContext(SchemaTemplateContext);
  const open = DrawerStore.open;
  const { navigateWithQuery } = useQueryNavigate();

  const showDrawer = () => {
    DrawerStore.show();
  };

  const hideDrawer = () => {
    DrawerStore.hide();
  };

  const back = () => {
    navigateWithQuery("../monitoring", "x", "y", "z");
  };

  let menu = (
    <Button onClick={back} icon={<ArrowLeftOutlined />} type={"text"} />
  );

  if (context?.mainControls?.menu) {
    menu = (
      <Button
        onClick={open ? hideDrawer : showDrawer}
        icon={<MenuOutlined />}
        type={open ? "primary" : "text"}
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
