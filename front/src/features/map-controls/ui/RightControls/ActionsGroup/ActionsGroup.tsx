import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore } from "@shared/misc";

import { active, wrapper, actions } from "./actions.module.scss";
import {
  ZoomIn,
  ZoomOut,
  Layers,
  Area,
  Distance,
  Coordinate,
  FullScreen,
} from "../actions";

const ActionsGroup = () => {
  const open = ControlsStore.layersPanelActive;
  const context = useContext(SchemaTemplateContext);

  const classes = classNames({
    [wrapper]: true,
    [active]: context?.fastControls?.layers ? open : false,
  });

  return (
    <div className={classes}>
      <div className={actions}>
        <Layers open={open} />
        <Coordinate type={"default"} />
        <Distance type={"default"} />
        <Area type={"default"} />
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
