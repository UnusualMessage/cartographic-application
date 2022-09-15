import { observer } from "mobx-react-lite";

import Map from "../components/Map";
import Controls from "../components/Controls";
import { TileLayer, VectorLayer } from "../components/Layer";
import View from "../components/View";
import Interactions from "../components/Interaction/Interactions";

const App = () => {
  return (
    <Map>
      <Controls />
      <View />
      <TileLayer name={"base"} />
      <VectorLayer name={"draw"}>
        <Interactions />
      </VectorLayer>
      {/*<Overlay />*/}
    </Map>
  );
};

export default observer(App);
