import { SearchOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import { observer } from "mobx-react-lite";

import { Geocoder } from "@entities/geocoder";
import { ControlsStore } from "@shared/misc";

const Search = () => {
  const category = ControlsStore.currentSearchCategory;

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
          { value: "fields", label: "Поля" },
          { value: "equipment", label: "Техника" },
        ]}
        bordered={false}
      />

      <Geocoder />
      <Button icon={<SearchOutlined />} type={"text"} />
    </>
  );
};

export default observer(Search);
