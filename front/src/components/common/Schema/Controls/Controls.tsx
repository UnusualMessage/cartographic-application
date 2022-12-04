import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";

import Location from "./Location";
import ViewControls from "./ViewControls";
import Panel from "./LayerControls";

interface Props {
  handle: FullScreenHandle;
}

const Controls = ({ handle }: Props) => {
  return (
    <>
      <Panel handlePrint={handle} />
      <ViewControls />
      <Location />
    </>
  );
};

export default observer(Controls);
