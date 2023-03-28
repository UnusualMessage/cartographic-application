import {
  StopFilled,
  SendOutlined,
  DeleteOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Polygon as IPolygon } from "@turf/helpers/dist/js/lib/geojson";
import {
  Feature as IFeature,
  area,
  polygon,
  toWgs84,
  FeatureCollection,
  toMercator,
} from "@turf/turf";
import { Space, Select, Button, message } from "antd";
import { observer } from "mobx-react-lite";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
import { v4 as uuid } from "uuid";

import { GeozonesStore } from "@entities/geozone";
import { OrganizationsStore } from "@entities/organization";
import { geozonesLayerId } from "@shared/constants";
import {
  InteractionsStore,
  InteractionType,
  FeaturesStore,
  LayersStore,
  Properties,
} from "@shared/misc";
import { PolygonFilled, TextFileInput } from "@shared/ui";

const Draw = () => {
  const interaction = InteractionsStore.type;

  const onSelect = (value: InteractionType) => {
    InteractionsStore.type = value;
  };

  const clear = () => {
    const layer = LayersStore.getVectorLayerById(geozonesLayerId);

    if (layer) {
      FeaturesStore.clear(layer);
    }
  };

  const save = () => {
    const features = FeaturesStore.features;

    for (const feature of features) {
      const geometry = feature.getGeometry() as Polygon | undefined;
      const organization = OrganizationsStore.organization;

      if (geometry && organization) {
        const id = feature.getId() ?? uuid();

        const savedFeature: IFeature<IPolygon, Properties> = {
          id: id,
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: geometry.getCoordinates(),
          },
          properties: {
            center: geometry.getInteriorPoint().getCoordinates(),
          },
        };

        const geozoneArea = area(
          polygon(toWgs84(savedFeature).geometry.coordinates)
        );
        const title = "Новая геозона";

        GeozonesStore.add({
          id: id.toString(),
          title: title,
          area: geozoneArea,
          type: "field",
          feature: savedFeature,
          children: [],

          organization,
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

      const layer = LayersStore.getVectorLayerById(geozonesLayerId);

      if (layer) {
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
          { value: "none", label: <StopFilled /> },
          { value: "cursor", label: <SendOutlined /> },
          { value: "geozones", label: <PolygonFilled /> },
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
