import { ItemRenderer, Suggest2 } from "@blueprintjs/select";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { fromLonLat } from "ol/proj";
import { Point } from "@turf/turf";
import { MenuItem } from "@blueprintjs/core";

import { wrapper } from "./geocoder.module.scss";

import GeocoderService from "../../../../api/GeocoderService";
import { ViewStore } from "../../../../stores";
import GeocoderFeature from "../../../../types/GeocoderFeature";

const itemRenderer: ItemRenderer<GeocoderFeature> = (feature) => {
  return (
    <MenuItem role={"listitem"} text={feature.place_name} key={feature.id} />
  );
};

const onItemSelect = (feature: GeocoderFeature) => {
  if (feature.geometry.type === "Point") {
    ViewStore.centerTo(fromLonLat((feature.geometry as Point).coordinates));
  }
};

const Geocoder = () => {
  const [features, setFeatures] = useState<GeocoderFeature[]>([]);

  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const geocoderService = new GeocoderService();

    const getFeatures = async () => {
      const response = await geocoderService.getLocation(event.target.value);
      setFeatures(response);
    };

    void getFeatures();
  };

  useEffect(() => {
    const input = document.querySelector(".bp4-input") as HTMLInputElement;
    input.placeholder = "Поиск...";
  }, []);

  const onQueryChange = (
    query: string,
    event: ChangeEvent<HTMLInputElement> | undefined
  ) => {
    if (event) {
      handleInput(event);
    }
  };

  return (
    <Suggest2<GeocoderFeature>
      className={wrapper}
      items={features}
      itemRenderer={itemRenderer}
      onQueryChange={onQueryChange}
      onItemSelect={onItemSelect}
    />
  );
};

export default Geocoder;
