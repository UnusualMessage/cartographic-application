import { observer } from "mobx-react-lite";

import Zoom from "./Zoom";
import Coordinates from "./Coordinates";

const ViewControls = () => {
  return (
    <>
      <Zoom />
      <Coordinates />
    </>
  );
};

export default observer(ViewControls);
