import Map from "../components/Map";
import Controls from "../components/Controls";
import { TileLayer, VectorLayer } from "../components/Layer";
import View from "../components/View";

const App = () => {
  return (
    <Map>
      <Controls />
      <View />
      <TileLayer name={"base"} />
      <VectorLayer name={"draw"} />
    </Map>
  );
};

export default App;
