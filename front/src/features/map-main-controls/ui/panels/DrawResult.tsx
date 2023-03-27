import { Typography, Collapse, Space } from "antd";
import { observer } from "mobx-react-lite";
import { Polygon } from "ol/geom";
import { toLonLat } from "ol/proj";

import { Panel } from "@entities/map-misc";
import { FeaturesStore } from "@shared/misc";

const { Text } = Typography;
const { Panel: AntPanel } = Collapse;

interface Props {
  geometry: Polygon;
}

const Feature = ({ geometry }: Props) => {
  const coordinates = geometry.getCoordinates()[0];

  return (
    <>
      {coordinates.map((coordinate, index) => {
        const converted = toLonLat(coordinate);
        const longitude = `Широта: ${converted[1].toFixed(4)}°`;
        const latitude = `Долгота: ${converted[0].toFixed(4)}°`;

        return (
          <Space key={index}>
            <Text strong>{`№${index + 1}.`}</Text>
            <Text>{longitude}</Text>
            <Text>{latitude}</Text>
          </Space>
        );
      })}
    </>
  );
};

const DrawResult = () => {
  const features = FeaturesStore.features;

  return (
    <Panel>
      <Collapse size={"small"}>
        {features.map((feature) => {
          const geometry = feature.getGeometry() as Polygon;
          const key = feature.getId() ?? "";

          return (
            <AntPanel key={key.toString()} header={feature.getId()}>
              <Feature geometry={geometry} />
            </AntPanel>
          );
        })}
      </Collapse>
    </Panel>
  );
};

export default observer(DrawResult);
