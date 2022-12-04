import { observer } from "mobx-react-lite";
import { FullScreenHandle } from "react-full-screen";

import ButtonsGroup from "./ButtonsGroup";
import ControlsGroup from "./ControlsGroup";

interface Props {
  handlePrint: FullScreenHandle;
}

const LayerControls = ({ handlePrint }: Props) => {
  return (
    <>
      <ButtonsGroup handlePrint={handlePrint} />
      <ControlsGroup />
    </>
  );
};

export default observer(LayerControls);
