import { observer } from "mobx-react-lite";

import { wrapper } from "./app.module.scss";

import Map from "../components/Map";
import Controls from "../components/Controls";
import { TileLayer, VectorLayer } from "../components/Layer";
import View from "../components/View";
import Interactions from "../components/Interactions";
import Overlay from "../components/Overlay";
import ContextMenu from "../components/ContextMenu";
import InteractionsStore from "../stores/InteractionsStore";
import Table from "../components/Table/Table";

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

  let mapSize;

  if (InteractionsStore.readonly) {
    mapSize = {
      width: "100%",
      height: "70%",
    };
  } else {
    mapSize = {
      width: "100%",
      height: "100%",
    };
  }

  return (
    <div className={wrapper}>
      <Map width={mapSize.width} height={mapSize.height}>
        <Controls />
        <View />
        <TileLayer name={"base"} />

        <VectorLayer name={"draw"}>
          {readonly ? <></> : <Interactions />}
        </VectorLayer>

        {contextMenu}
        {overlay}
      </Map>

      <Table />
    </div>
  );
};

export default observer(App);
