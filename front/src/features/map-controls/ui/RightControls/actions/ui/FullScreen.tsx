import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { FullScreenStore } from "@shared/misc";
import { Condition } from "@shared/ui";

import { wrapper } from "./action.module.scss";

const FullScreen = () => {
  const context = useContext(SchemaTemplateContext);
  const active = FullScreenStore.active;

  const exit = () => {
    FullScreenStore.exit();
  };

  const enter = () => {
    FullScreenStore.enter();
  };

  return (
    <Condition truthy={context?.fastControls?.fullscreen}>
      <Button
        className={wrapper}
        icon={active ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        type={active ? "primary" : "default"}
        onClick={active ? exit : enter}
      />
    </Condition>
  );
};

export default observer(FullScreen);
