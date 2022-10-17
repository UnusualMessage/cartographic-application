import { ItemRenderer, Omnibar } from "@blueprintjs/select";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { fromLonLat } from "ol/proj";
import { Point } from "@turf/turf";
import { MenuItem } from "@blueprintjs/core";

import GeocoderService from "../../../../api/GeocoderService";
import { ViewStore } from "../../../../stores";
import GeocoderFeature from "../../../../types/GeocoderFeature";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

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

const Geocoder = ({ isOpen, onClose }: Props) => {
  const [features, setFeatures] = useState<GeocoderFeature[]>([]);

  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const geocoderService = new GeocoderService();

    const getFeatures = async () => {
      const response = await geocoderService.getLocation(event.target.value);
      setFeatures(response);
    };

    void getFeatures();
  };

  const onQueryChange = (
    query: string,
    event: ChangeEvent<HTMLInputElement> | undefined
  ) => {
    if (event) {
      handleInput(event);
    }
  };

  return (
    <Omnibar<GeocoderFeature>
      isOpen={isOpen}
      items={features}
      itemRenderer={itemRenderer}
      onClose={onClose}
      onQueryChange={onQueryChange}
      onItemSelect={onItemSelect}
      resetOnSelect
    />
  );
};

export default Geocoder;
