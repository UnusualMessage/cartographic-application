import { Button, Select } from "antd";
import { observer } from "mobx-react-lite";

import { MapStore } from "@shared/misc";
import { Panel } from "entities/map";

const PrintResult = () => {
  const onSelect = (value: "a4" | "a3") => {
    MapStore.printFormat = value;
  };

  return (
    <Panel>
      <Select
        onChange={onSelect}
        value={MapStore.printFormat}
        options={[
          { value: "a4", label: "A4 (альбомный)" },
          { value: "a3", label: "A3 (альбомный)" },
        ]}
      />

      <Button onClick={() => MapStore.printMap()} type={"primary"}>
        Печать
      </Button>
    </Panel>
  );
};

export default observer(PrintResult);
