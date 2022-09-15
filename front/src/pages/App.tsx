import { observer } from "mobx-react-lite";

import Map from "../components/Map";
import Controls from "../components/Controls";
import { TileLayer, VectorLayer } from "../components/Layer";
import View from "../components/View";
import Interaction from "../components/Interaction/Interaction";
import { InteractionType } from "../types/InteractionType";
import Overlay from "../components/Overlay";

const App = () => {
  return (
    <Map>
      <Controls />
      <View />
      <TileLayer name={"base"} />
      <VectorLayer name={"draw"}>
        <Interaction type={InteractionType.draw} />
        <Interaction type={InteractionType.select} />
        <Interaction type={InteractionType.modify} />
        <Interaction type={InteractionType.snap} />
      </VectorLayer>
      <Overlay />
    </Map>
  );
};

export default observer(App);
