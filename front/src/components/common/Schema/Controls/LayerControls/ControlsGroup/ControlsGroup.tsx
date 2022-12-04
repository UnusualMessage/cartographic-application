import classNames from "classnames";

import { visible, wrapper } from "./group.module.scss";

import LayersSwitcher from "./LayersSwitcher";

interface Props {
  isPanelOpen?: boolean;
}

const ControlsGroup = ({ isPanelOpen }: Props) => {
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

export default ControlsGroup;
