import {
  StopFilled,
  SendOutlined,
  DeleteOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Polygon as IPolygon } from "@turf/helpers";
import { FeatureCollection, toMercator } from "@turf/turf";
import { Space, Select, Button, message } from "antd";
import { observer } from "mobx-react-lite";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import { v4 as uuid } from "uuid";

import { OrganizationsStore, GeozonesStore } from "@entities/business";
import { geozonesLayerId } from "@shared/constants";
import {
  InteractionsStore,
  Interactions,
  FeaturesStore,
  MapStore,
} from "@shared/misc";
import { PolygonFilled, TextFileInput } from "@shared/ui";

const Draw = () => {
  const interaction = InteractionsStore.type;

  const onSelect = (value: Interactions) => {
    InteractionsStore.type = value;
  };

  const clear = () => {
    const layer = MapStore.getLayerById(geozonesLayerId);

    if (layer instanceof VectorLayer) {
      FeaturesStore.clear(layer);
    }
  };

  const save = () => {
    const features = FeaturesStore.features;

    for (const feature of features) {
      const geometry = feature.getGeometry() as Polygon | undefined;
      const organization = OrganizationsStore.organization;

      if (geometry && organization) {
        const title = "Новая геозона";

        void GeozonesStore.add({
          title: title,
          organizationId: organization.id,
        });
      }
    }

    clear();
    void message.success("Данные сохранены");
  };

  const onLoad = (result: string) => {
    const collection: FeatureCollection<IPolygon> = toMercator(
      JSON.parse(result)
    );

    for (const feature of collection.features) {
      const newFeature = new Feature<Polygon>(feature.geometry);
      newFeature.setId(uuid());
      newFeature.setGeometry(new Polygon(feature.geometry.coordinates));

      const layer = MapStore.getLayerById(geozonesLayerId);

      if (layer instanceof VectorLayer) {
        FeaturesStore.addFeatureToLayer(newFeature, layer);
      }
    }
  };

  return (
    <Space>
      <Select
        onChange={onSelect}
        value={interaction}
        options={[
          { value: Interactions.none, label: <StopFilled /> },
          { value: Interactions.cursor, label: <SendOutlined /> },
          { value: Interactions.geozones, label: <PolygonFilled /> },
        ]}
        bordered={false}
      />

      <TextFileInput onLoad={onLoad} />
      <Button icon={<SaveOutlined />} type={"text"} onClick={save} />
      <Button icon={<DeleteOutlined />} type={"text"} onClick={clear} />
    </Space>
  );
};

export default observer(Draw);
