import { SearchOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import { observer } from "mobx-react-lite";

import { SearchEquipment, SearchGeozone } from "@entities/business";
import { Geocoder } from "@entities/map";
import { ControlsStore } from "@shared/misc";

const Search = () => {
  const category = ControlsStore.currentSearchCategory;

  let searchComponent = <></>;

  switch (category) {
    case "equipment":
      searchComponent = <SearchEquipment />;
      break;
    case "geozones":
      searchComponent = <SearchGeozone />;
      break;
    case "geocoder":
      searchComponent = <Geocoder />;
  }

  const onSelect = (value: any) => {
    ControlsStore.currentSearchCategory = value;
  };

  return (
    <>
      <Select
        style={{ width: 150 }}
        onChange={onSelect}
        value={category}
        options={[
          { value: "geocoder", label: "Геокодер" },
          { value: "geozones", label: "Геозоны" },
          { value: "equipment", label: "Техника" },
        ]}
        bordered={false}
      />

      {searchComponent}
      <Button icon={<SearchOutlined />} type={"text"} />
    </>
  );
};

export default observer(Search);
