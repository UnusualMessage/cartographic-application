import { Select } from "antd";
import { Coordinate } from "ol/coordinate";
import { fromLonLat } from "ol/proj";
import { useState, ReactNode } from "react";

import { ViewStore } from "@shared/misc";

import { GeozonesStore } from "../../model";

interface Option {
  key?: string;
  label: ReactNode;
  value: Coordinate;
}

const SearchGeozone = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [value, setValue] = useState<string>();

  const handleSearch = (value: string) => {
    const geozones = GeozonesStore.geozones.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setOptions(
      geozones.map((item) => {
        return {
          key: item.id,
          label: item.title,
          value: item.feature.properties.center,
        };
      })
    );
  };

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSelect = (value: string, item: Option) => {
    ViewStore.centerWithZoomTo(12)(fromLonLat(item.value));
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
      placeholder="Искать геозоны..."
      notFoundContent={null}
      onSearch={handleSearch}
      onChange={handleChange}
      onSelect={handleSelect}
      style={{ width: "150px" }}
    />
  );
};

export default SearchGeozone;
