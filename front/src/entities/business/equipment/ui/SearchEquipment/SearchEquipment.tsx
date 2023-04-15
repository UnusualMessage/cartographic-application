import { Select } from "antd";
import { Coordinate } from "ol/coordinate";
import { useState, ReactNode } from "react";

import { ViewService } from "@shared/misc";

import { EquipmentStore } from "../../model";

interface Option {
  key?: string;
  label: ReactNode;
  value: Coordinate;
}

const SearchEquipment = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [value, setValue] = useState<string>();

  const handleSearch = (value: string) => {
    const equipment = EquipmentStore.equipment.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setOptions(
      equipment.map((item) => {
        return {
          key: item.id,
          label: item.name,
          value: item.feature.geometry.coordinates,
        };
      })
    );
  };

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSelect = (value: string, item: Option) => {
    ViewService.centerWithZoomTo(15)(item.value);
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
      placeholder="Искать технику..."
      notFoundContent={null}
      onSearch={handleSearch}
      onChange={handleChange}
      onSelect={handleSelect}
      style={{ width: "150px" }}
    />
  );
};

export default SearchEquipment;
