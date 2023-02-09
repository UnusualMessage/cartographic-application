import { observer } from "mobx-react-lite";

import Coordinates from "./Coordinates";
import Zoom from "./Zoom";

const ViewControls = () => {
  return (
    <>
      <Zoom />
      <Coordinates />
    </>
  );
};

export default observer(ViewControls);
