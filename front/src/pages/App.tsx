import { observer } from "mobx-react-lite";

import Map from "../components/Map";
import Controls from "../components/Controls";
import { TileLayer, VectorLayer } from "../components/Layer";
import View from "../components/View";
import Interactions from "../components/Interactions";
import Overlay from "../components/Overlay";
import ContextMenu from "../components/ContextMenu";
import InteractionsStore from "../stores/InteractionsStore";

const App = () => {
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
    <Map width={"100%"} height={"50%"}>
      <Controls />
      <View />
      <TileLayer name={"base"} />

      <VectorLayer name={"draw"}>
        {readonly ? <></> : <Interactions />}
      </VectorLayer>

      {contextMenu}
      {overlay}
    </Map>
  );
};

export default observer(App);
