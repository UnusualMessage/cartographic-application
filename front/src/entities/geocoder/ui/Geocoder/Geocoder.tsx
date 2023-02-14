import { MenuItem } from "@blueprintjs/core";
import { ItemRenderer, Suggest2 } from "@blueprintjs/select";
import { Point } from "@turf/turf";
import { fromLonLat } from "ol/proj";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

import { ViewStore } from "@features/map-view";
import { GeocoderFeature } from "@shared/misc";

import { GeocoderService } from "../../model";

const itemRenderer: ItemRenderer<GeocoderFeature> = (
  feature,
  { handleClick }
) => {
  return (
    <MenuItem
      role={"listoption"}
      text={feature.place_name}
      key={feature.id}
      onClick={handleClick}
    />
  );
};

const inputValueRenderer = (feature: GeocoderFeature) => {
  return feature.place_name;
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
      items={features}
      inputValueRenderer={inputValueRenderer}
      itemRenderer={itemRenderer}
      onQueryChange={onQueryChange}
      onItemSelect={onItemSelect}
      noResults={"Пустота..."}
      popoverProps={{ minimal: true, matchTargetWidth: true }}
      resetOnClose
      resetOnSelect
      closeOnSelect
    />
  );
};

export default Geocoder;
