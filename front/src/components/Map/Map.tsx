import { observer } from "mobx-react-lite";

import Controls from "./Controls";
import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import Interactions from "./Interactions";
import MapWrapper from "./MapWrapper";
import InteractionsStore from "../../stores/InteractionsStore";
import ContextMenu from "./ContextMenu";
import Overlay from "./Overlay";

const Map = () => {
  const readonly = InteractionsStore.readonly;

  const contextMenu = (
    <div>
      <ContextMenu />
    </div>
  );

  let overlay = <></>;

  if (readonly) {
    overlay = (
      <div>
        <Overlay />
      </div>
    );
  }

  return (
    <MapWrapper>
      <Controls />
      <View />
      <TileLayer name={"base"} />

      <VectorLayer name={"draw"}>
        {readonly ? <></> : <Interactions />}
      </VectorLayer>

      {contextMenu}
      {overlay}
    </MapWrapper>
  );
};

export default observer(Map);
