import { Typography, Collapse, Space, Empty } from "antd";
import { observer } from "mobx-react-lite";
import { Polygon } from "ol/geom";
import { toLonLat } from "ol/proj";

import { FeaturesStore } from "@shared/misc";

const { Text } = Typography;
const { Panel } = Collapse;

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

  if (features.length === 0) {
    return <Empty />;
  }

  return (
    <Collapse size={"small"}>
      {features.map((feature) => {
        const geometry = feature.getGeometry() as Polygon;
        const key = feature.getId() ?? "";

        return (
          <Panel key={key.toString()} header={feature.getId()}>
            <Feature geometry={geometry} />
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default observer(DrawResult);
