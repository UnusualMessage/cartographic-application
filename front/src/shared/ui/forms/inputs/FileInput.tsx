import { FolderOutlined } from "@ant-design/icons";
import { FeatureCollection, Polygon as IPolygon, toMercator } from "@turf/turf";
import { Button } from "antd";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
import { ChangeEventHandler, useRef } from "react";
import { v4 as uuid } from "uuid";

import { geozonesLayerId } from "../../../constants";
import { FeaturesStore, LayersStore } from "../../../misc";

const FileInput = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        if (reader.result) {
          const result: FeatureCollection<IPolygon> = toMercator(
            JSON.parse(reader.result.toString())
          );

          for (const feature of result.features) {
            const newFeature = new Feature<Polygon>(feature.geometry);
            newFeature.setId(uuid());
            newFeature.setGeometry(new Polygon(feature.geometry.coordinates));

            const layer = LayersStore.getVectorLayerById(geozonesLayerId);

            if (layer) {
              FeaturesStore.addFeatureToLayer(newFeature, layer);
            }
          }
        }
      };
    }
  };

  return (
    <>
      <input
        ref={fileRef}
        id="contained-button-file"
        type="file"
        hidden
        onChange={onChange}
      />
      <label htmlFor={"contained-button-file"}>
        <Button
          icon={<FolderOutlined />}
          type={"text"}
          onClick={() => fileRef.current?.click()}
        />
      </label>
    </>
  );
};

export default FileInput;
