import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { bordersLayerId } from "@shared/constants";
import { LayersStore } from "@shared/misc";

const BordersLayersSwitch = () => {
  const [checked, setChecked] = useState(true);

  const onChange = (e: CheckboxChangeEvent) => {
    LayersStore.toggleLayerGroup(bordersLayerId);
    setChecked(e.target.checked);
  };

  return (
    <Checkbox checked={checked} onChange={onChange}>
      Границы
    </Checkbox>
  );
};

export default observer(BordersLayersSwitch);
