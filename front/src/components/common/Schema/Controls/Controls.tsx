import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";

import ViewControls from "./ViewControls";
import LayerControls from "./LayerControls";
import MainControls from "./MainControls";

interface Props {
  handle: FullScreenHandle;
}

const Controls = ({ handle }: Props) => {
  return (
    <>
      <LayerControls handlePrint={handle} />
      <ViewControls />
      <MainControls />
    </>
  );
};

export default observer(Controls);
