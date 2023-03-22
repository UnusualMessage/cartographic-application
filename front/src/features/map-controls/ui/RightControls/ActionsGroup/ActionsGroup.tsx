import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

import { active, wrapper, actions } from "./actions.module.scss";
import {
  ZoomIn,
  ZoomOut,
  Print,
  Layers,
  LengthMeasurement,
  CoordinateMeasurement,
  AreaMeasurement,
  FullScreen,
} from "../actions";

const ActionsGroup = () => {
  const open = ControlsStore.layersPanelActive;

  const classes = classNames({
    [wrapper]: true,
    [active]: open,
  });

  return (
    <div className={classes}>
      <div className={actions}>
        <Layers open={open} />
        <CoordinateMeasurement />
        <LengthMeasurement />
        <AreaMeasurement />
        <Print />
        <FullScreen />
      </div>

      <div className={actions}>
        <ZoomIn />
        <ZoomOut />
      </div>
    </div>
  );
};

export default observer(ActionsGroup);
