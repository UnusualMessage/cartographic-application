import { observer } from "mobx-react-lite";

import { map, wrapper } from "./main.module.scss";

import Map from "../Map";
import Controls from "../Map/Controls";
import View from "../Map/View";
import { TileLayer, VectorLayer } from "../Map/Layer";
import Interactions from "../Map/Interactions";
import TableTabs from "../Tabs/TableTabs";
import InteractionsStore from "../../stores/InteractionsStore";
import ContextMenu from "../Map/ContextMenu";
import Overlay from "../Map/Overlay";
import Sider from "../Sider";

const Main = () => {
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
    <div className={wrapper}>
      <Sider />

      <div className={map}>
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
      </div>
    </div>
  );
};

export default observer(Main);
