import { Map } from "@features/map";
import { Controls } from "@features/map-controls";
import { Layers } from "@features/map-layers";
import { View } from "@features/map-view";

const PrintSchema = () => {
  return (
    <Map toPrint>
      <View />
      <Layers />
      <Controls />
    </Map>
  );
};

export default PrintSchema;
