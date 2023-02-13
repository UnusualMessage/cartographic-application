import { Button, ButtonGroup, Collapse } from "@blueprintjs/core";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { DrawingStore } from "@features/interactions";
import { LayersStore } from "@features/layers";
import { MapStore } from "@features/map";
import { auxLayerId } from "@shared/constants";
import { ControlsStore } from "@shared/misc";
import { InteractionType } from "@shared/misc/types/map";

import { active, wrapper } from "./buttons.module.scss";

const ButtonsGroup = () => {
  const interactionType = DrawingStore.interactionType;
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

  const switchType = (type: InteractionType) => {
    LayersStore.clearVectorLayer(auxLayerId);

    if (interactionType === type) {
      DrawingStore.interactionType = "none";
    } else {
      DrawingStore.interactionType = type;
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
            intent={interactionType === "measure-length" ? "primary" : "none"}
            onClick={() => switchType("measure-length")}
          />

          <Button
            icon="polygon-filter"
            intent={interactionType === "measure-area" ? "primary" : "none"}
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
