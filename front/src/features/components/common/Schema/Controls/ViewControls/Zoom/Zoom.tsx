import { Button, ButtonGroup } from "@blueprintjs/core";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/api";

import { active, wrapper } from "./zoom.module.scss";
import { ViewStore } from "../../../../../../../entities/stores/map";

const Zoom = () => {
  const zoomIn = () => {
    ViewStore.zoomIn();
  };

  const zoomOut = () => {
    ViewStore.zoomOut();
  };

  const isPanelActive = ControlsStore.layersPanelActive;

  const classes = classNames({
    [wrapper]: true,
    [active]: isPanelActive,
  });

  return (
    <ButtonGroup vertical className={classes}>
      <Button icon="zoom-in" onClick={zoomIn} />
      <Button icon="zoom-out" onClick={zoomOut} />
    </ButtonGroup>
  );
};

export default observer(Zoom);
