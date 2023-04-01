import { Select } from "antd";
import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

const Layers = () => {
  const category = ControlsStore.currentLayerCategory;

  const onSelect = (value: any) => {
    ControlsStore.currentLayerCategory = value;
  };

  return (
    <Select
      style={{ width: 150 }}
      onChange={onSelect}
      value={category}
      options={[
        { value: "base", label: "Подложки" },
        { value: "weather", label: "Погодные" },
        { value: "vector", label: "Векторные" },
      ]}
      bordered={false}
    />
  );
};

export default observer(Layers);
