import { observer } from "mobx-react-lite";

import ButtonsGroup from "./ButtonsGroup";
import ControlsGroup from "./ControlsGroup";

const LayerControls = () => {
  return (
    <>
      <ButtonsGroup />
      <ControlsGroup />
    </>
  );
};

export default observer(LayerControls);
