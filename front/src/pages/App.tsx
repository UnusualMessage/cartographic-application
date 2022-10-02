import { observer } from "mobx-react-lite";

import Map from "../components/Map";
import Controls from "../components/Map/Controls";
import { TileLayer, VectorLayer } from "../components/Map/Layer";
import View from "../components/Map/View";
import Interactions from "../components/Map/Interactions";
import Overlay from "../components/Map/Overlay";
import ContextMenu from "../components/Map/ContextMenu";
import InteractionsStore from "../stores/InteractionsStore";
import TableTabs from "../components/Tabs/TableTabs";
import Header from "../components/Header";

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
    <>
      <Header />

      <Map>
        <Controls />
        <View />
        <TileLayer name={"base"} />

        <VectorLayer name={"draw"}>
          {readonly ? <></> : <Interactions />}
        </VectorLayer>

        {contextMenu}
        {overlay}
      </Map>

      <TableTabs />
    </>
  );
};

export default observer(App);
