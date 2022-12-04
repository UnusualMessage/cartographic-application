import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { visible, wrapper } from "./group.module.scss";

import LayersSwitcher from "./LayersSwitcher";
import { ControlsStore } from "../../../../../../stores/ui";

const ControlsGroup = () => {
  const isPanelOpen = ControlsStore.layersPanelActive;

  const classes = classNames({
    [wrapper]: true,
    [visible]: isPanelOpen,
  });

  return (
    <div className={classes}>
      <LayersSwitcher />
    </div>
  );
};

export default observer(ControlsGroup);
