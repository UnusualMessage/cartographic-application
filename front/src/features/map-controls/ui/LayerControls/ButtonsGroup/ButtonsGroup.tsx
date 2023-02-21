import { Button, ButtonGroup, Collapse } from "@blueprintjs/core";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { auxLayerId } from "@shared/constants";
import {
  ControlsStore,
  DrawType,
  LayersStore,
  MapStore,
  InteractionsStore,
} from "@shared/misc";

import { active, wrapper } from "./buttons.module.scss";

const ButtonsGroup = () => {
  const drawType = InteractionsStore.drawType;
  const isPanelOpen = ControlsStore.layersPanelActive;
  const handleFullScreen = ControlsStore.fullScreenHandle;
  const fullScreenActive = ControlsStore.fullScreenActive;

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const handleCollapse = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

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
      <Button
        icon={"wrench"}
        intent={isCollapseOpen ? "primary" : "none"}
        onClick={handleCollapse}
        large
      />

      <Collapse isOpen={isCollapseOpen} keepChildrenMounted>
        <ButtonGroup vertical large>
          <Button
            icon="layers"
            intent={isPanelOpen ? "primary" : "none"}
            onClick={switchPanel}
          />

          <Button
            icon="one-to-one"
            intent={drawType === "measure-length" ? "primary" : "none"}
            onClick={() => switchType("measure-length")}
          />

          <Button
            icon="polygon-filter"
            intent={drawType === "measure-area" ? "primary" : "none"}
            onClick={() => switchType("measure-area")}
          />

          <Button
            icon="fullscreen"
            intent={fullScreenActive ? "primary" : "none"}
            onClick={fullScreenActive ? exitFullScreen : enterFullScreen}
          />

          <Button icon="print" intent={"none"} onClick={print} />
        </ButtonGroup>
      </Collapse>
    </div>
  );
};

export default observer(ButtonsGroup);
