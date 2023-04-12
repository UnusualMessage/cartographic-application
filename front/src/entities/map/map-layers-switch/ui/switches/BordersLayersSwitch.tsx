import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { observer } from "mobx-react-lite";
import LayerGroup from "ol/layer/Group";
import { useState } from "react";

import { bordersLayerId } from "@shared/constants";
import { MapStore } from "@shared/misc";

const BordersLayersSwitch = () => {
  const [checked, setChecked] = useState(true);

  const onChange = (e: CheckboxChangeEvent) => {
    const group = MapStore.getLayerById(bordersLayerId);

    if (group instanceof LayerGroup) {
      group.setVisible(!group.getVisible());
    }

    setChecked(e.target.checked);
  };

  return (
    <Checkbox checked={checked} onChange={onChange}>
      Границы
    </Checkbox>
  );
};

export default observer(BordersLayersSwitch);
