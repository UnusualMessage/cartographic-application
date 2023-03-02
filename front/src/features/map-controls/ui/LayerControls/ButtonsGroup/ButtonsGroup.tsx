import { Button, Space } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { auxLayerId } from "@shared/constants";
import {
  ControlsStore,
  DrawType,
  LayersStore,
  MapStore,
  InteractionsStore,
} from "@shared/misc";
import { Icon } from "@shared/ui";

import { active, wrapper } from "./buttons.module.scss";

const ButtonsGroup = () => {
  const drawType = InteractionsStore.drawType;
  const isPanelOpen = ControlsStore.layersPanelActive;
  const handleFullScreen = ControlsStore.fullScreenHandle;
  const fullScreenActive = ControlsStore.fullScreenActive;

  const switchPanel = () => {
    ControlsStore.switchPanel();
  };

  const switchType = (type: DrawType) => {
    LayersStore.clearVectorLayer(auxLayerId);

    if (drawType === type) {
      InteractionsStore.drawType = "none";
    } else {
      InteractionsStore.drawType = type;
    }
  };

  const print = () => {
    MapStore.printMap();
  };

  const exitFullScreen = () => {
    handleFullScreen?.exit();
    ControlsStore.fullScreenActive = false;
  };

  const enterFullScreen = () => {
    handleFullScreen?.enter();
    ControlsStore.fullScreenActive = true;
  };

  const classes = classNames({
    [wrapper]: true,
    [active]: isPanelOpen,
  });

  return (
    <div className={classes}>
      <Space direction={"vertical"} size={2}>
        <Button
          icon={<Icon icon={"layers"} />}
          type={isPanelOpen ? "primary" : "default"}
          size={"large"}
          onClick={switchPanel}
        />

        <Button
          icon={<Icon icon={"one-to-one"} />}
          type={drawType === "measure-length" ? "primary" : "default"}
          size={"large"}
          onClick={() => switchType("measure-length")}
        />

        <Button
          icon={<Icon icon={"polygon-filter"} />}
          type={drawType === "measure-area" ? "primary" : "default"}
          size={"large"}
          onClick={() => switchType("measure-area")}
        />

        <Button
          icon={<Icon icon={"fullscreen"} />}
          type={fullScreenActive ? "primary" : "default"}
          size={"large"}
          onClick={fullScreenActive ? exitFullScreen : enterFullScreen}
        />

        <Button
          icon={<Icon icon={"print"} />}
          type={"default"}
          size={"large"}
          onClick={print}
        />
      </Space>
    </div>
  );
};

export default observer(ButtonsGroup);
