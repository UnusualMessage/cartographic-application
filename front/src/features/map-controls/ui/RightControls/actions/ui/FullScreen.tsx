import { FullscreenOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";

const FullScreen = () => {
  const fullScreenActive = ControlsStore.fullScreenActive;
  const handleFullScreen = ControlsStore.fullScreenHandle;

  const exit = () => {
    handleFullScreen?.exit();
    ControlsStore.fullScreenActive = false;
  };

  const enter = () => {
    handleFullScreen?.enter();
    ControlsStore.fullScreenActive = true;
  };

  return (
    <Button
      className={wrapper}
      icon={<FullscreenOutlined />}
      type={fullScreenActive ? "primary" : "default"}
      onClick={fullScreenActive ? exit : enter}
    />
  );
};

export default observer(FullScreen);
