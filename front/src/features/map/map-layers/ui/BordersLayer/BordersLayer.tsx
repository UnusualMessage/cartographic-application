import { WfsVectorLayer, LayersGroup } from "@entities/map";
import { bordersLayerId } from "@shared/constants";
import { getBorderStyle } from "@shared/lib";

const BordersLayer = () => {
  return (
    <LayersGroup id={bordersLayerId}>
      <WfsVectorLayer id={"admin_level_2"} style={getBorderStyle} />
      <WfsVectorLayer id={"admin_level_3"} style={getBorderStyle} />
      <WfsVectorLayer id={"admin_level_4"} style={getBorderStyle} />
      <WfsVectorLayer id={"admin_level_5"} style={getBorderStyle} />
      <WfsVectorLayer
        id={"admin_level_6"}
        style={getBorderStyle}
        minZoom={8}
        maxZoom={10}
      />
      <WfsVectorLayer
        id={"admin_level_8"}
        style={getBorderStyle}
        minZoom={10}
        maxZoom={13}
      />
      <WfsVectorLayer
        id={"admin_level_9"}
        style={getBorderStyle}
        minZoom={13}
      />
    </LayersGroup>
  );
};

export default BordersLayer;
