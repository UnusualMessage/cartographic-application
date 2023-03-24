import { Point } from "@turf/turf";
import { Select } from "antd";
import { Coordinate } from "ol/coordinate";
import { fromLonLat } from "ol/proj";
import { useState, ReactNode } from "react";

import { ViewStore } from "@shared/misc";

import { GeocoderService } from "../model";

interface Option {
  key?: string;
  label: ReactNode;
  value: Coordinate;
}

const Geocoder = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [value, setValue] = useState<string>();

  const handleSearch = (value: string) => {
    const geocoderService = new GeocoderService();

    const getFeatures = async () => {
      const response = await geocoderService.getLocation(value);
      setOptions(
        response.map((item) => {
          return {
            key: item.id?.toString(),
            label: item.place_name,
            value: (item.geometry as Point).coordinates,
          };
        })
      );
    };

    void getFeatures();
  };

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSelect = (value: string, item: Option) => {
    ViewStore.centerTo(fromLonLat(item.value));
    setValue(value);
  };

  return (
    <Select
      bordered={false}
      showSearch
      labelInValue
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      value={value}
      options={options}
      placeholder="Поиск..."
      notFoundContent={null}
      onSearch={handleSearch}
      onChange={handleChange}
      onSelect={handleSelect}
      style={{ width: "150px" }}
    />
  );
};

export default Geocoder;
